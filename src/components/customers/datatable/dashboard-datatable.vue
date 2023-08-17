<template>
  <!--begin::Card-->
  <div class="col-lg-12 col-xl-12 mb-5 mb-xl-0">
    <div class="card h-md-100">
      <div class="card-header border-0 pt-5">
        <h2 class="card-title align-items-start flex-column mb-9">
          <span class="fw-bold text-dark">專案進度</span>
        </h2>
      </div>
      <div class="card-body py-10 pt-0">
        <div class="common_tab">
          <ul
            class="nav nav-pills nav-pills-custom row position-relative mx-0 mb-9"
          >
            <li class="nav-item p-0">
              <a
                class="nav-link active d-flex justify-content-center w-100 border-0 h-100"
                data-bs-toggle="pill"
                href="#kt_list_widget_100_tab_1"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3"
                  >我的專案</span
                >
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"
                ></span>
              </a>
            </li>
            <li class="nav-item p-0">
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100"
                data-bs-toggle="pill"
                href="#kt_list_widget_100_tab_2"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3"
                  >關注專案</span
                >
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"
                ></span>
              </a>
            </li>
            <li class="nav-item p-0">
              <a
                class="nav-link d-flex justify-content-center w-100 border-0 h-100"
                data-bs-toggle="pill"
                href="#kt_list_widget_100_tab_3"
              >
                <span class="nav-text text-gray-800 fw-bold fs-6 mb-3"
                  >標註我的專案</span
                >
                <span
                  class="bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded"
                ></span>
              </a>
            </li>
            <span
              class="position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded"
            ></span>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="kt_list_widget_100_tab_1"
              role="tabpanel"
            >
              <table class="table table-row-bordered gy-5 gs-7 index_datatable">
                <thead>
                  <tr class="fw-semibold fs-6 text-gray-800">
                    <th>案件編號</th>
                    <th>案件名稱</th>
                    <th>負責人</th>
                    <th>預估開始時間</th>
                    <th>預估結束時間</th>
                    <th>案件狀態</th>
                    <th>專案完成度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北內湖案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2022-11-01</td>
                    <td>2022-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北永春案件</a
                      >
                    </td>
                    <td>Mary</td>
                    <td>2022-10-01</td>
                    <td>2022-11-31</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 50%"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>50%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20240301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北信義案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2021-11-01</td>
                    <td>2022-02-01</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 30%"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>30%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20231201</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >新北鶯歌案件</a
                      >
                    </td>
                    <td>Peter</td>
                    <td>2022-04-01</td>
                    <td>2023-11-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230601</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >台北木柵案件</a
                      >
                    </td>
                    <td>RYAN</td>
                    <td>2023-06-03</td>
                    <td>2023-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 56%"
                            aria-valuenow="56"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>56%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >P20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >新北板橋案件</a
                      >
                    </td>
                    <td>MARU</td>
                    <td>2023-05-06</td>
                    <td>2023-07-08</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 78%"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>78%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北中山案件</a
                      >
                    </td>
                    <td>DORIS</td>
                    <td>2021-10-01</td>
                    <td>2022-06-06</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="kt_list_widget_100_tab_2"
              role="tabpanel"
            >
              <table
                id=""
                class="table table-row-bordered gy-5 gs-7 index_datatable"
              >
                <thead>
                  <tr class="fw-semibold fs-6 text-gray-800">
                    <th>案件編號</th>
                    <th>案件名稱</th>
                    <th>負責人</th>
                    <th>預估開始時間</th>
                    <th>預估結束時間</th>
                    <th>案件狀態</th>
                    <th>專案完成度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20231201</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >新北鶯歌案件</a
                      >
                    </td>
                    <td>Peter</td>
                    <td>2022-04-01</td>
                    <td>2023-11-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230601</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >台北木柵案件</a
                      >
                    </td>
                    <td>RYAN</td>
                    <td>2023-06-03</td>
                    <td>2023-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 56%"
                            aria-valuenow="56"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>56%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >P20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >新北板橋案件</a
                      >
                    </td>
                    <td>MARU</td>
                    <td>2023-05-06</td>
                    <td>2023-07-08</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 78%"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>78%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北中山案件</a
                      >
                    </td>
                    <td>DORIS</td>
                    <td>2021-10-01</td>
                    <td>2022-06-06</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北內湖案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2022-11-01</td>
                    <td>2022-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >P20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >新北板橋案件</a
                      >
                    </td>
                    <td>MARU</td>
                    <td>2023-05-06</td>
                    <td>2023-07-08</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 78%"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>78%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北中山案件</a
                      >
                    </td>
                    <td>DORIS</td>
                    <td>2021-10-01</td>
                    <td>2022-06-06</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北內湖案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2022-11-01</td>
                    <td>2022-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >P20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >新北板橋案件</a
                      >
                    </td>
                    <td>MARU</td>
                    <td>2023-05-06</td>
                    <td>2023-07-08</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 78%"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>78%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北中山案件</a
                      >
                    </td>
                    <td>DORIS</td>
                    <td>2021-10-01</td>
                    <td>2022-06-06</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北內湖案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2022-11-01</td>
                    <td>2022-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北永春案件</a
                      >
                    </td>
                    <td>Mary</td>
                    <td>2022-10-01</td>
                    <td>2022-11-31</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 50%"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>50%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20240301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北信義案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2021-11-01</td>
                    <td>2022-02-01</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 30%"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>30%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="kt_list_widget_100_tab_3"
              role="tabpanel"
            >
              <table class="table table-row-bordered gy-5 gs-7 index_datatable">
                <thead>
                  <tr class="fw-semibold fs-6 text-gray-800">
                    <th>案件編號</th>
                    <th>案件名稱</th>
                    <th>負責人</th>
                    <th>預估開始時間</th>
                    <th>預估結束時間</th>
                    <th>案件狀態</th>
                    <th>專案完成度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230601</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >台北木柵案件</a
                      >
                    </td>
                    <td>RYAN</td>
                    <td>2023-06-03</td>
                    <td>2023-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 56%"
                            aria-valuenow="56"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>56%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >P20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >新北板橋案件</a
                      >
                    </td>
                    <td>MARU</td>
                    <td>2023-05-06</td>
                    <td>2023-07-08</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 78%"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>78%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北中山案件</a
                      >
                    </td>
                    <td>DORIS</td>
                    <td>2021-10-01</td>
                    <td>2022-06-06</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北內湖案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2022-11-01</td>
                    <td>2022-12-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20230501</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北永春案件</a
                      >
                    </td>
                    <td>Mary</td>
                    <td>2022-10-01</td>
                    <td>2022-11-31</td>
                    <td>
                      <span class="badge badge-light-danger">維護中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 50%"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>50%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20240301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北信義案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2021-11-01</td>
                    <td>2022-02-01</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 30%"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>30%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20231201</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >新北鶯歌案件</a
                      >
                    </td>
                    <td>Peter</td>
                    <td>2022-04-01</td>
                    <td>2023-11-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20240301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北信義案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2021-11-01</td>
                    <td>2022-02-01</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 30%"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>30%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20231201</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >新北鶯歌案件</a
                      >
                    </td>
                    <td>Peter</td>
                    <td>2022-04-01</td>
                    <td>2023-11-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20240301</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >台北信義案件</a
                      >
                    </td>
                    <td>TINA</td>
                    <td>2021-11-01</td>
                    <td>2022-02-01</td>
                    <td><span class="badge badge-light-dark">已結案</span></td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 30%"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>30%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >D20231201</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >新北鶯歌案件</a
                      >
                    </td>
                    <td>Peter</td>
                    <td>2022-04-01</td>
                    <td>2023-11-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="client-info.html"
                        class="text-gray-800 text-hover-primary"
                        >A20230801</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:;"
                        class="text-gray-800 text-hover-primary"
                        >桃園蘆竹案件</a
                      >
                    </td>
                    <td>AMY</td>
                    <td>2023-06-01</td>
                    <td>2025-01-31</td>
                    <td>
                      <span class="badge badge-light-success">執行中</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="progress h-6px w-100 me-2 bg-light-primary">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 36%"
                            aria-valuenow="36"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span>36%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import Datatable from "@/components/kt-datatable/KTDataTable.vue";

export default defineComponent({
  name: "dashboard-datatable",
  props: {
    cardClasses: String,
  },
  components: {
    // Datatable,
  },
});
</script>
