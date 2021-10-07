import {useState, useEffect} from 'react';

export default function usePromise(promiseCreator, deps) {
    // 대기중/완료/실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            console.log('렌더링됨')
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
    }, deps);
    console.log('렌더링후')
    return [loading, resolved, error];
}