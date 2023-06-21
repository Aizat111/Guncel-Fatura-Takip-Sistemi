export const SubscriptionApi = (instance: any) => ({
    async addSubscription(body: any) {
        const {data} = await instance.post('/subscription', body)
        return data
      },
      async subscriptions() {
        const {data} = await instance.get('/subscription')
        return data
      },
      async deleteSubscription(id: any) {
        const {data} = await instance.delete(`/subscription/${id}`)
        return data
      },
})
