import { UserApi } from './users';
import { RoleApi } from './roles';
import axios from "axios"
import { SubscriptionApi } from './subscriptions';

export const Api = () => {
    const token = JSON.parse(localStorage.getItem('persist:v100-demo1-auth') || '')
    const instance = axios.create({
      baseURL: 'http://localhost:5001',
      headers: {
        Authorization: `Bearer ${token?.accessToken?.replaceAll('"', '')}`,
      },
    })
  
    return {
      roles: RoleApi(instance),
      users: UserApi(instance),
      subscriptions: SubscriptionApi(instance)
    }
  }