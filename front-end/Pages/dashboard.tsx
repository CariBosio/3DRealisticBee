import BeeAnimation from '@components/BeeAnimation'
import baseClasses from '@components/Themes/layout.module.scss'
import bee3dstylemodulescss from 'dist/css/bee3dstyle.module.scss'
import React, { FunctionComponent } from 'react'

const Dashboard: FunctionComponent = (props: any) => {
  const {
    history: navigation,
    match: { params },
  } = props
  const classes = baseClasses
  const [lang, setlang] = React.useState<any>('en')
  const theme = { ...baseClasses, ...bee3dstylemodulescss }

  React.useEffect(() => {
    if (typeof langStrings !== 'undefined') {
      setlang(langStrings[localStorage.getItem('aptugolang') || 'en'])
    }
  }, [])

  // Theme selection

  return (
    <React.Fragment>
      <div className={theme.pages}>
        <header data-title="Header" className={theme.nav}>
          <div data-title="Content Fit" className={theme.contentFit}>
            <div data-title="Logo" className={theme.logo}>
              <picture>
                <img src="/img/logo.png" alt="/img/logo.png" />
              </picture>
            </div>

            <nav data-title="Nav">
              <ul data-title="ul">
                <li data-title="li Contacts">Contacts</li>

                <li data-title="li Category">Category</li>

                <li data-title="li Login">Login</li>
              </ul>
            </nav>
          </div>
        </header>

        <div data-title="Section banner" id="banner" className={theme.banner}>
          <div data-title="div" className={theme.contentFit}>
            <div data-title="Title" data-before={'3D ANIMATION'} className={theme.title}>
              3D ANIMATION
            </div>
          </div>

          <picture className={`${theme.decorate} ${theme.flower}`}>
            <img
              src="https://assets.codepen.io/453571/flower.png"
              alt="https://assets.codepen.io/453571/flower.png"
              style={{
                bottom: 0,
                right: 0,
              }}
            />
          </picture>
          <picture className={`${theme.decorate} ${theme.leaf1}`}>
            <img src="https://assets.codepen.io/453571/leaf.png" alt="https://assets.codepen.io/453571/leaf.png" width="30vw" />
          </picture>
        </div>

        <section data-title="Section Intro" id="intro" className={theme.intro}>
          <div data-title="div" className={theme.contentFit}>
            <div data-title="div" className={theme.number}>
              01
            </div>

            <div data-title="div" className={theme.des}>
              <div data-title="div" className={theme.title}>
                3d animation design for website
              </div>

              <div data-title="div" className={theme.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptas a porro libero recusandae quae, aut ratione, incidunt
                laborum, necessitatibus similique enim doloremque ex. Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic itaque
                consequatur nisi accusantium veritatis, voluptatem ratione! Placeat numquam nisi reiciendis harum quibusdam tempore eaque deleniti
                accusantium, veniam quae eos sed, asperiores laborum corporis odit mollitia consequatur adipisci? Quibusdam quis eos debitis non esse
                blanditiis laudantium rerum odit tempora? Corrupti maiores velit consequuntur cupiditate reiciendis similique provident repudiandae.
              </div>
            </div>
          </div>
        </section>

        <div data-title="Section description" id="description" className={theme.description}>
          <div data-title="div" className={theme.contentFit}>
            <div data-title="div" className={theme.number}>
              02
            </div>

            <div data-title="div" className={theme.des}>
              <div data-title="div" className={theme.title}>
                Unrestricted applications
              </div>

              <div data-title="div" className={theme.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptas a porro libero recusandae quae, aut ratione, incidunt
                laborum, necessitatibus similique enim doloremque ex. Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic itaque
                consequatur nisi accusantium veritatis, voluptatem ratione! Placeat numquam nisi reiciendis harum quibusdam tempore eaque deleniti
                accusantium, veniam quae eos sed, asperiores laborum corporis odit mollitia consequatur adipisci? Quibusdam quis eos debitis non esse
                blanditiis laudantium rerum odit tempora? Corrupti maiores velit consequuntur cupiditate reiciendis similique provident repudiandae.
              </div>
            </div>
          </div>

          <picture className={`${theme.decorate} ${theme.leaf2}`}>
            <img src="https://assets.codepen.io/453571/leaf1.png" alt="https://assets.codepen.io/453571/leaf1.png" width="70vw" />
          </picture>
        </div>

        <section data-title="Section Contact" id="contact" className={theme.contact}>
          <div data-title="div" className={theme.contentFit}>
            <div data-title="div" className={theme.number}>
              03
            </div>

            <div data-title="div" className={theme.des}>
              <div data-title="div" className={theme.title}>
                CONTACT
              </div>

              <table data-title="table">
                <tr data-title="tr">
                  <td data-title="td">Email</td>

                  <td data-title="td">aptugo@gmail.com</td>
                </tr>

                <tr data-title="tr">
                  <td data-title="td">Phone</td>

                  <td data-title="td">1125632835</td>
                </tr>

                <tr data-title="tr">
                  <td data-title="td">Website</td>

                  <td data-title="td">aptugo.com</td>
                </tr>

                <tr data-title="tr">
                  <td data-title="td">Youtube</td>

                  <td data-title="td">@AptugoForDev</td>
                </tr>
              </table>

              <div data-title="div Sign" className={theme.sign}>
                by Aptugo
              </div>
            </div>
          </div>
        </section>

        <div data-title="Container3D" id="container3D">
          <BeeAnimation />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
