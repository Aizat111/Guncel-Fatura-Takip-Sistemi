export const BillApi = (instance: any) => ({
  async bills(link: string) {
    const {data} = await instance.get('/bill-payment-list' + link)
    return data
  },
  async payBill(id: any) {
    const {data} = await instance.patch(`/bill-payment-list/${id}`, {status: true})
    return data
  },
  async getBillStatistic(link: string){
    const {data} = await instance.get('bill-payment-list/statistics' + link)
    return data
  },
  async getBillGraphic(link: string){
    const {data} = await instance.get('bill-payment-list/graphic' + link)
    return data
  }
})
