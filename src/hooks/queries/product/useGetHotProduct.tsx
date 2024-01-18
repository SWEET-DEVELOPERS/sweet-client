import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { HotProductsType } from '../../../types/product';

interface HotProductResponse extends Response {
  data: HotProductsType;
}

export const HOT_PRODUCT_QUERY_KEY: string[] = ['hotProductData'];

export const fetchHotProduct = async (roomId: number): Promise<HotProductResponse> =>
  get(`/product/hot/${roomId}`);

const useGetHotProduct = ({ roomId }: { roomId: number }) => {
  const { data, isLoading, isError } = useSuspenseQuery({
    queryKey: [HOT_PRODUCT_QUERY_KEY, roomId],
    queryFn: () => fetchHotProduct(roomId),
  });

  return { data, isLoading, isError };
};

export default useGetHotProduct;
