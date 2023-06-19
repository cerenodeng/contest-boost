'use client';

export default async function AdminTable({ data }) {
  console.log('table!', data, '----')

  return (
    <div>data={data}</div>
  )
}