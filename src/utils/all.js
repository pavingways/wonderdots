/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("de-CH", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "";
