success = (data, msg, paginate = null) => {
    let meta = {
      page: paginate != null ? paginate.page: null,
      size: paginate != null ? paginate.size: null,
      totalItems: paginate != null ? paginate.totalItems: 0
    }
    return {
      error: false,
      data: data,
      message: msg,
      meta: paginate != null ? meta : null
    }
  }
  
  error = (msg) => {
    return {
      error: true,
      message: msg
    }
  }
  
  module.exports = {
    success: success,
    error: error
  };
  