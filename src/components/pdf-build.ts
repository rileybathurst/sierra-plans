import { jsPDF } from "jspdf";
import { Canvg } from "canvg";
import type { PlanTypes } from "../types/plan-types";

const Pdfbuild = ({
  name,
  slug,
  address,
  zip,
  areas,
  svg,
  notes,
  jobber,
  jobbertakedown,
  timerHours,
  timerFallback,
  createdAt,
  updatedAt,
  takedownFlexOrder,
  takedownday,
}: PlanTypes) => {
  const doc = new jsPDF("p", "in", "letter", true);

  doc.setFont("helvetica", "normal");

  doc.setLineWidth(0.01);

  doc.text(name, 0.5, 0.75);

  doc.setFontSize(12);

  doc.text(
    `${address}, ${areas[0]?.name}, ${
      areas[0]?.state === "california" ? "CA" : "NV"
    }${zip ? `. ${zip}` : ""}`,
    0.5,
    1
  );

  doc.setFontSize(9);

  if (jobber) {
    doc.rect(6.75, 0.5, 1.25, 1.25);
    doc.text("Jobber", 6.85, 0.75);
    doc.text(jobber.toString(), 6.85, 1);

    if (jobbertakedown) {
      doc.text("Jobber Takedown", 6.85, 1.25);
      doc.text(jobbertakedown.toString(), 6.85, 1.5);
    }
  }

  if (timerHours) {
    doc.text(`Timer: ${timerHours} Hours`, 0.5, 1.25);
  }

  if (timerFallback) {
    doc.text(`Timer: ${timerFallback}`, 0.5, 1.25);
  }

  if (notes.data.notes) {
    const splitNote = doc.splitTextToSize(notes.data.notes, 7);
    doc.text(splitNote, 0.5, 1.5, { maxWidth: 6 });
  }

  // base64 encode the canvas image
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
  const canvas = document.createElement("canvas");
  canvas.width = 2550;
  canvas.height = 2550;

  const ctx = canvas.getContext("2d");
  if (ctx) {
    const v = Canvg.fromString(ctx, svg);

    v.start();
    const dataURL = canvas.toDataURL() || "";

    doc.addImage(dataURL, "png", 0.5, 2, 7.5, 8);
  }

  let mostRecent = "";
  if (createdAt !== updatedAt) {
    const dates = `Created: ${createdAt} Updated: ${updatedAt}`;
    doc.text(dates, 0.5, 9.5);
    mostRecent = updatedAt;
  } else {
    doc.text(`Created: ${updatedAt}`, 0.5, 9.5);
    mostRecent = createdAt;
  }

  doc.line(0.5, 9.6, 8, 9.6);

  const logo = new Image();
  logo.src =
    "https://sierralighting.s3.us-west-1.amazonaws.com/sierra_lighting-full_logo-black-fs8.png";
  doc.addImage(logo, "png", 0.5, 9.7, 1, 0.51);

  doc.save(
    `${jobber}${
      jobbertakedown ? `-${jobbertakedown}` : ""
    }-${name}-${slug}-${mostRecent}`
  ); // * turn off for developing
};

export default Pdfbuild;
