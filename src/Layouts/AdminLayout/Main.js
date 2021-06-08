import React from 'react'
import { Card ,CardTitle,CardBody} from 'reactstrap'


export default function Main({content}) {
    return (
        <div className="content__main">
          <Card id="cardMain">
            {/* <CardTitle>abc</CardTitle> */}
            <CardBody id="cardBodyMain">{content}</CardBody>
          </Card>
        </div>
    )
}
