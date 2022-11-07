export interface Social {
  image: string
  title: string
  text: string
  progress: {
    value: string
    color: string
  }
}

export const socials: Array<Social> = [
  {
    image: '/media/svg/brand-logos/dribbble-icon-1.svg',
    title: 'Dribbble',
    text: 'Community',
    progress: {
      value: '65',
      color: 'success',
    },
  },
  {
    image: '/media/svg/brand-logos/instagram-2-1.svg',
    title: 'Linked In',
    text: 'Social Media',
    progress: {
      value: '87',
      color: 'warning',
    },
  },
  {
    image: '/media/svg/brand-logos/slack-icon.svg',
    title: 'Slack',
    text: 'Messanger',
    progress: {
      value: '44',
      color: 'primary',
    },
  },
  {
    image: '/media/svg/brand-logos/google-icon.svg',
    title: 'Google',
    text: 'SEO & PPC',
    progress: {
      value: '70',
      color: 'info',
    },
  },
  {
    image: '/media/svg/brand-logos/invision.svg',
    title: 'inVision',
    text: 'Collaboration',
    progress: {
      value: '56',
      color: 'danger',
    },
  },
  {
    image: '/media/svg/brand-logos/facebook-3.svg',
    title: 'Facebook',
    text: 'Social Network',
    progress: {
      value: '82',
      color: 'success',
    },
  },
]
