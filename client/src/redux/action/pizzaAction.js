const axios = require('axios')

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZAS_REQUEST' })
  try {
    const response = await axios.get('/api/pizzas/getallpizzas')
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: 'GET_PIZZAS_FAILED', payload: err })
  }
}
