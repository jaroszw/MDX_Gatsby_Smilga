import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section className="success-page">
        <h2>Your submissino was received</h2>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </section>
    </Layout>
  )
}

export default Success
