export const RoleApi = (instance: any) => ({
    async roles() {
      const {data} = await instance.get(`roles`)
      return data
    },
    async addRole(body: any) {
        const {data} = await instance.post('/roles', body)
        return data
      },
      async updateRole(role_id: any,body: any) {
        const {data} = await instance.patch(`/roles/${role_id}`, body)
        return data
      },
      async deleteRole(role_id: any) {
        const {data} = await instance.delete(`/roles/${role_id}`)
        return data
      },
})
