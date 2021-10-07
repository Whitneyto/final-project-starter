import React, { useState } from "react";

export function cardGroup({counterList}:{counterList: Counters[]}: JSX.Element {
    return <div id="counters">
    <Row xs={1} md={2} className="g-4">
        {counterList.map((counter) =>)
            <Col>
                <Card>

                </Card>
            </Col>
        }
    </Row>
    </div>
}