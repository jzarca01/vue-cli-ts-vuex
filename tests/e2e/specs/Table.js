module.exports = {
    'Table.vue: it should display the datatable': browser => {
      browser
        .url(process.env.VUE_DEV_SERVER_URL+'table')
        .waitForElementVisible('.el-table', 1000)
        .assert.visible('.el-table')
        .end()
    },
    'Table.vue: it should have at least one row': browser => {
        browser
          .url(process.env.VUE_DEV_SERVER_URL+'table')
          .waitForElementVisible('.el-table', 1000)
          .assert.elementPresent('.el-table__row')
          .end()
      },
}