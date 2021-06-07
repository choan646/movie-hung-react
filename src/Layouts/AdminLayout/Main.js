import React from 'react'
import { Card ,CardTitle,CardBody} from 'reactstrap'


export default function Main({content}) {
    return (
        <div className="content__main">
          <Card>
            {/* <CardTitle>abc</CardTitle> */}
            <CardBody>{content}</CardBody>
          </Card>
        </div>
    )
}
