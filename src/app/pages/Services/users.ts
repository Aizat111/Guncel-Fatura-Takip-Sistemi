export const UserApi = (instance: any) => ({
    async users() {
      const {data} = await instance.get(`/users`)
      return data
    },
    async user(id:any) {
      const {data} = await instance.get(`/users/${id}`)
      return data
    },
    async addUser(body: any) {
        const {data} = await instance.post('/auth/registration', body)
        return data
      },
    async updateUser(user_id: any,body: any) {
      const {data} = await instance.patch(`/users/${user_id}`, body)
      return data
    },
    async deleteUser(user_id: any) {
      const {data} = await instance.delete(`/users/${user_id}`)
      return data
    },
})