import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'a.tag-link': {
    boxShadow: 'none',
    fontSize: '80%',
  },
  'a.tag-link:not(:last-child)': {
    marginRight: '1rem',
    width: '1rem',
  },
  'a.author-link': {
    boxShadow: 'none',
    fontSize: '80%',
  },
  'a.author-link:not(:last-child)': {
    marginRight: '1rem',
    width: '1rem',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
