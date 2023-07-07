export default {
  sheetBest: {
    baseURL:
      'https://sheet.best/api/sheets/c4b84cf4-5b47-4d42-8d13-f15c77265042',
  },
  googleapis: {
    baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/',
    key: 'AIzaSyCFrn6gQAqIr6nzk54OagxdJZu6tsn4uOY',
    sheetId: '1l9MLOgM2NFV1jz83JfTRXt1iJpK2Ze7mKWzZyGoefW4',
    tab: {
      product: {
        name: 'Product',
        field: {
          id: 'Id',
          name: 'Name',
          price: 'Price',
          category: 'Category',
          note: 'Note',
        },
      },
    },
    // https://sheets.googleapis.com/v4/spreadsheets/1qcUFl6M6ZxrO761OrNJCVS_0gWEOt0nxXokxlI4D7nE/values/Transactions?alt=json&key=AIzaSyDFL2wPwH3-cdi9uo4-ifni6aitfHRTvjw
    // https://www.sharperlight.com/uncategorized/2022/04/06/accessing-the-google-sheets-api-via-sharperlight-query-builder/
  },
};
