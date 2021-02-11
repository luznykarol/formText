import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import GitHubButton from 'react-github-btn'
import Checkbox from '@/components/Forms/partials/Checkbox'
import { useForm } from 'react-hook-form'
import NewForm from '@/components/Forms/NewForm'

export const HomePageTemplate = ({ data }) => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='container px-5 sm:px-10'>
          <section className='w-full bg-teal-100 py-20 px-5 rounded-lg shadow border-grey-lighter border'>
            <div className='text-center mx-auto'>
              <NewForm title={'NewForm'}></NewForm>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate data={frontmatter} />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        title
        links {
          link {
            content
            url
          }
        }
      }
    }
  }
`

export default HomePage
