import moment from "moment";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const exportToExcel = (year, data1, data2, data3) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileId = `Submission Report ${moment(year).format("YYYY")}`;

  const ws1 = XLSX.utils.json_to_sheet(data1, {
    origin: "A10",
  });
  const ws2 = XLSX.utils.json_to_sheet(data2, {
    origin: "A10",
  });
  const ws3 = XLSX.utils.json_to_sheet(data3, {
    origin: "A10",
  });

  var wscols = [{ wch: 40 }];

  ws1["!cols"] = wscols;
  ws2["!cols"] = wscols;
  ws3["!cols"] = wscols;

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws1, "Landing Page");
  XLSX.utils.book_append_sheet(wb, ws2, "Data Submission");
  XLSX.utils.book_append_sheet(wb, ws3, "Lead Submission");

  XLSX.utils.sheet_add_json(
    ws1,
    [
      {
        Name: `Landing Page / Widget`,
      },
      {
        Name: "",
        RollNo: "",
      },
      {
        Name: "Duration",
        RollNo: `1 Year`,
      },
      {
        Name: "Date Period",
        RollNo: `${moment(year).format("YYYY")}`,
      },
    ],
    {
      skipHeader: true,
      origin: "A1",
    }
  );

  XLSX.utils.sheet_add_json(
    ws2,
    [
      {
        Name: `Data Submission`,
      },
      {
        Name: "",
        RollNo: "",
      },
      {
        Name: "Duration",
        RollNo: `1 Year`,
      },
      {
        Name: "Date Period",
        RollNo: `${moment(year).format("YYYY")}`,
      },
    ],
    {
      skipHeader: true,
      origin: "A1",
    }
  );
  XLSX.utils.sheet_add_json(
    ws3,
    [
      {
        Name: `Lead Submission`,
      },
      {
        Name: "",
        RollNo: "",
      },
      {
        Name: "Duration",
        RollNo: `1 Year`,
      },
      {
        Name: "Date Period",
        RollNo: `${moment(year).format("YYYY")}`,
      },
    ],
    {
      skipHeader: true,
      origin: "A1",
    }
  );
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const excelData = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(excelData, fileId + fileExtension);
};
