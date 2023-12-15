<template>
  <div class="card">
    <div class="card-body d-flex flex-column p-9">
      <div class="table-responsive">
        <div
          id="DataTables_Table_0_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="table-responsive">
            <table
              class="table align-middle table-row-bordered fs-6 gy-5 housing_info_table dataTable no-footer"
              id="DataTables_Table_0"
              style="width: 939px"
            >
              <thead>
                <tr class="text-start text-gray-800 fw-bold fs-7 gs-0">
                  <th style="width: 10%">區域</th>
                  <th style="width: 35%">說明</th>
                  <th style="width: 50%">照片</th>
                  <th style="width: 5%"></th>
                </tr>
              </thead>
              <tbody class="fw-semibold text-gray-800">
                <tr>
                  <td class="sorting_1">客廳</td>
                  <td>家中主要的起居空間，通常用於休息、娛樂</td>
                  <td>
                    <div class="card-title">
                      <div class="symbol-group">
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg7.jpg" />
                        </div>
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg6.jpg" />
                        </div>
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg8.jpg" />
                        </div>
                        <div class="symbol">
                          <img alt="Pic" src="assets/media/auth/bg9.jpg" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="d-block btn btn-sm btn-icon text-muted text-hover-danger"
                    >
                      <i class="ki-duotone ki-cross fs-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-start mb-8">
        <button
          type="button"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal_add_eng"
        >
          <i class="ki-duotone ki-plus fs-2"></i>
          新增區域
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
