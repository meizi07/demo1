<template>
  <div class="card h-md-100">
    <div class="card-header border-0 pt-5">
      <h2 class="card-title align-items-start flex-column">
        <span class="fw-bold text-dark">當日行程</span>
      </h2>
      <div class="card-toolbar">
        <router-link to="/calendar" class="btn btn-sm btn-light"
          >查看行事曆</router-link
        >
      </div>
    </div>
    <div class="card-body pt-7 px-0">
      <ul
        class="nav nav-stretch nav-pills nav-pills-custom nav-pills-active-custom d-flex justify-content-between mb-8 px-5"
      >
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_1"
          >
            <span class="fs-7 fw-semibold">五</span>
            <span class="fs-6 fw-bold">20</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_2"
          >
            <span class="fs-7 fw-semibold">六</span>
            <span class="fs-6 fw-bold">21</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_3"
          >
            <span class="fs-7 fw-semibold">日</span>
            <span class="fs-6 fw-bold">22</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger active"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_4"
          >
            <span class="fs-7 fw-semibold">一</span>
            <span class="fs-6 fw-bold">23</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_5"
          >
            <span class="fs-7 fw-semibold">二</span>
            <span class="fs-6 fw-bold">24</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_6"
          >
            <span class="fs-7 fw-semibold">三</span>
            <span class="fs-6 fw-bold">25</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_7"
          >
            <span class="fs-7 fw-semibold">四</span>
            <span class="fs-6 fw-bold">26</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_8"
          >
            <span class="fs-7 fw-semibold">五</span>
            <span class="fs-6 fw-bold">27</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_9"
          >
            <span class="fs-7 fw-semibold">六</span>
            <span class="fs-6 fw-bold">28</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_10"
          >
            <span class="fs-7 fw-semibold">日</span>
            <span class="fs-6 fw-bold">29</span>
          </a>
        </li>
        <li class="nav-item p-0 ms-0">
          <a
            class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger"
            data-bs-toggle="tab"
            href="#kt_timeline_widget_3_tab_content_11"
          >
            <span class="fs-7 fw-semibold">一</span>
            <span class="fs-6 fw-bold">30</span>
          </a>
        </li>
      </ul>
      <div class="tab-content mb-2 px-4">
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_1">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_2">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_3">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show active"
          id="kt_timeline_widget_3_tab_content_4"
        >
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_5">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_6">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_7">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_8">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_9">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_10">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_11">
          <div class="scd_content scroll-y mh-300px">
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">10:20</div>
                <div class="text-gray-700 fw-semibold fs-6">
                  業主確認案場施工
                </div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">台北內湖</span>
                <h5 class="scd_days delay">延遲 15天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-6">
              <span
                data-kt-element="bullet"
                class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"
              ></span>
              <div class="flex-grow-1 me-5">
                <div class="text-gray-800 fw-semibold fs-2">15:30</div>
                <div class="text-gray-700 fw-semibold fs-6">軟裝設備進場</div>
                <div class="text-gray-400 fw-semibold fs-7">
                  NOTE.內容內容內容內容內容內容容內容容內容
                </div>
              </div>
              <div class="scd_right">
                <span class="scd_proj">新板艾麗</span>
                <h5 class="scd_days">到期日 8天</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@fullcalendar/core/vdom";
import { defineComponent } from "vue";

export default defineComponent({
  name: "calendar-app-2",
  components: {},
});
</script>

<style lang="scss">
.fc .fc-button {
  padding: 0.75rem 1.25rem;
  box-shadow: none !important;
  border: 0 !important;
  border-radius: 0.475rem;
  vertical-align: middle;
  font-weight: 500;
  text-transform: capitalize;
}
</style>
