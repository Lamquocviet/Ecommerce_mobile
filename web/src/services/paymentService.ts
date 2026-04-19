import { api } from '@/lib/api';
import type { CheckoutPayload, CheckoutResponse } from '@/types';

export const createCheckoutSession = async (
  payload: CheckoutPayload
): Promise<CheckoutResponse> => {
  const response = await api.post<CheckoutResponse>('/api/checkout', payload);
  return response.data;
};
