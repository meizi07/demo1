export interface AllHousingData {
  ProjectID: string;
  ProjectName: string;
  ProjectCategory: string;
  RecorderDate: string;
  Recorder: string;
}

export interface ProjectInfo {
  ProjectID: string;
  RecordDate: string;
  Recorder: string;
}

export interface MeasuringData {
  FileName: string;
  FilePath: string;
  Description: string;
}

// "HousingInfo": {
//   "ProjectInfo": {
//       "ProjectID": "ProjectID",
//       "RecordDate": "RecordDate",
//       "Recorder": "Recorder"
//   },
//   "HousingDetail": [
//       {
//           "Area": "Area",
//           "Description": "Description",
//           "DetailRecord": {
//               "FileImage": "FileImage",
//               "Description": "Description"
//           }
//       },
//       {
//           "Area": "Area",
//           "Description": "Description",
//           "DetailRecord": {
//               "FileImage": "FileImage",
//               "Description": "Description"
//           }
//       }
//   ]
// },
// "measure": [
//   {
//       "FileName": "FileName",
//       "FilePath": "FilePath",
//       "Description": "Description"
//   },
//   {
//       "FileName": "FileName",
//       "FileImage": "FileImage",
//       "Description": "Description"
//   }
// ]
