import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'
import Centered from '../../../components/Centered'
import Pic from '../../../components/Pic';
import architecture from './architecture.JPG';
import component from './component.JPG';

function GLBFilesReact() {
  return (
    <>
      <ArticlesHeader />

      <Paragraph>
        You do not need write every 3D objects from zero by Three.js
      </Paragraph>
      <Paragraph mb={true}>
        It is not efficient.
      </Paragraph>

      <Paragraph mb={true}>
        You might ask, then what???
      </Paragraph>

      <br />

      <Centered>
        <Paragraph>
          <i>
            Desgin your objects on softwares like Maya or Blender or ...
          </i>
        </Paragraph>
      </Centered>
      <Centered>
        <Paragraph mb={true}>
            <i>
              Then code the functionality with Three.js
            </i>
          </Paragraph>
      </Centered>

      <br />

      <Paragraph mb={true}>
        Let's discuss it step by step.
      </Paragraph>

      <Paragraph>
        1{`)`} {`  `} npm i @react-three/fiber three @react-three/drei
      </Paragraph>
      <Paragraph>
        2{`)`} {`  `} export the .glb file from your softwere.
      </Paragraph>
      <Paragraph mb={true}>
        3{`)`} {`  `} Place your .glb file, in this route. It is so crucial to paste it on <b>public</b> files.
      </Paragraph>
      <Pic src={architecture} alt={'architecture of the files'} />

      <br />

      <Paragraph mb={true}>
        4{`)`} {`  `} Create a component like this:
      </Paragraph>
      <Pic src={component} alt={'inside jsx file'} />

      <br />

      <Paragraph>
        Red{`)`} {`  `} This only returns the object. We do not care about environment like canvas or camera or position or ...
      </Paragraph>
      <Paragraph>
        Green{`)`} {`  `} We define the environment and use the object here.
      </Paragraph>
    </>
  )
}

export default GLBFilesReact