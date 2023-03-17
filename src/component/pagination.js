import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const pagination = () => {
  return (
    <div>
      <Stack spacing={2} className="d-flex justify-content-center align-items-center">
      <Pagination count={10} shape="rounded" />
    </Stack>
    </div>
  )
}

export default pagination