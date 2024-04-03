import { useCallback } from 'react';
import useMutation from '../useMutation';

type TPayload = Parameters<ReturnType<typeof useMutation<'trading_platform_password_reset'>>['mutate']>[0]['payload'];
type TPayloadAsync = Parameters<
    ReturnType<typeof useMutation<'trading_platform_password_reset'>>['mutateAsync']
>[0]['payload'];

/** A custom hook that reset the Trading Platform Password. */
const useTradingPlatformPasswordReset = () => {
    const { mutate: _mutate, mutateAsync: _mutateAsync, ...rest } = useMutation('trading_platform_password_reset');

    const mutate = useCallback((payload: TPayload) => _mutate({ payload }), [_mutate]);
    const mutateAsync = useCallback((payload: TPayloadAsync) => _mutateAsync({ payload }), [_mutateAsync]);

    return {
        /** The mutation function that accepts a payload and sends it to the server */
        mutate,
        mutateAsync,
        ...rest,
    };
};

export default useTradingPlatformPasswordReset;
