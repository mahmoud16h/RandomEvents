import {fetchData} from '../utils/api'

export const setData = data => ({
    type: 'GET_DATA',
    data
})

export const randomise = data => ({
    type: 'RANDOM_CARDS',
    data
})

export const getData = () => async dispatch => {
    const data = await fetchData().catch(({error}) =>
        console.log(error),
    );

    if (data) {
        dispatch(setData(data))
    }
}
