import React, { useState } from "react";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import {
  Row,
  OneThirdColumn,
  TwoThirdColumn,
  FullColumn,
  HalfColumn,
} from "../../components/utility/rowColumn";
import InstagramFeed from "./InstagramFeed";
import Contacts from "../Contact/contactBox";
import Statistics from "./Statistics";
import Transaction from "./Transactions";
import SalesProgress from "./SaleProgress";
import SalesStats from "./Sales";
import SaleChart from "./SaleCharts";
import TableWidget from "./TableWidget";
import CircularWidget from "./CircularWidgets";
import Visitors from "./Visitors";
import { data, data2, data3 } from "./Transactions/config";
import WidgetBox from "./WidgetBox";
import Input from "../../components/uielements/input";
import Icon from "../../components/uielements/icon/index.js";
import { Button } from "../UiElements/Button/button.style";

import {
  Container,
  FormControl,
  InputLabel,
} from "../UiElements/TextFields/textfield.style";

const Widget = () => {
  const newDate = new Date();
  const today = newDate.getDate();

  const [From, setFrom] = useState(today - 8);
  const [To, setTo] = useState(today);
  const [Clicked, setClicked] = useState(false);

  return (
    <LayoutWrapper>
      <Row>
        <FullColumn>
          {/* from -- to DAU  */}
          <WidgetBox>
            <Row>
              <Container>
                <FormControl>
                  <InputLabel
                    style={{ marginTop: "-20px" }}
                    htmlFor="custom-color-input"
                  >
                    From :
                  </InputLabel>
                  <Input
                    id="custom-color-input"
                    type="number"
                    onChange={(e) => {
                      setFrom(e.target.value);
                      setClicked(false);
                    }}
                    min="1"
                    max="31"
                  />
                </FormControl>
              </Container>
              <Container>
                <FormControl>
                  <InputLabel
                    style={{ marginTop: "-20px" }}
                    htmlFor="custom-color-input"
                  >
                    TO :
                  </InputLabel>
                  <Input
                    id="custom-color-input"
                    onChange={(e) => {
                      setTo(e.target.value);
                      setClicked(false);
                    }}
                    type="number"
                  />
                </FormControl>
              </Container>
              <Container>
                <FormControl>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => setClicked(true)}
                  >
                    Filter_DAU
                    <Icon className="rightIcon">send</Icon>
                  </Button>
                </FormControl>
              </Container>
            </Row>
          </WidgetBox>
        </FullColumn>
      </Row>
      <Row>
        <HalfColumn>
          {/* this is for stacked column chart.js component   */}
          <SalesStats
            title="D.A.U"
            From={From}
            To={To}
            Clicked={Clicked}
            stretched
          />
        </HalfColumn>

        <HalfColumn>
          {/* this is for right side statics component  */}
          <Statistics title="Statistics" stretched />
        </HalfColumn>
      </Row>

      <Row>
        <HalfColumn md={12}>
          <Visitors title="Visitors" stretched />
        </HalfColumn>

        <HalfColumn style={{ paddingTop: 0, paddingBottom: 0 }} md={12}>
          <Row>
            <HalfColumn sm={6} md={6}>
              <SalesProgress
                title="Daily Sales"
                currency="$"
                amount="60"
                progress="67"
                color="rgb(153, 102, 255)"
                downward
              />
            </HalfColumn>

            <HalfColumn sm={6} md={6}>
              <SalesProgress
                title="Weekly Sales"
                currency="$"
                amount="560"
                progress="49"
                color="rgb(255, 99, 132)"
                upward
              />
            </HalfColumn>

            <HalfColumn sm={6} md={6}>
              <SalesProgress
                title="Monthly Sales"
                currency="$"
                amount="2430"
                progress="54"
                color="rgb(54, 162, 235)"
                upward
              />
            </HalfColumn>

            <HalfColumn sm={6} md={6}>
              <SalesProgress
                title="Daily Sales"
                currency="$"
                amount="30128"
                progress="79"
                color="rgb(255, 159, 64)"
                upward
              />
            </HalfColumn>
          </Row>
        </HalfColumn>
      </Row>

      <Row>
        <TwoThirdColumn sm={12} md={6}>
          <Contacts title="Member" widgetHeight={410} stretched />
        </TwoThirdColumn>

        <OneThirdColumn sm={12} md={6}>
          <Transaction
            title="Transactions"
            duration="Jun 24 - Jul 23"
            amount="59.01"
            currency="$"
            data={data2}
            upward
            style={{ marginBottom: 20 }}
          />

          <Transaction
            title="Transactions"
            duration="Jul 24 - Aug 23"
            amount="79.51"
            currency="$"
            data={data}
            downward
            style={{ marginBottom: 20 }}
          />

          <Transaction
            title="Transactions"
            duration="Aug 24 - Sep 23"
            amount="89.71"
            currency="$"
            data={data3}
            upward
          />
        </OneThirdColumn>
      </Row>

      <Row>
        <FullColumn>
          <TableWidget title="Employees Data" />
        </FullColumn>
      </Row>
      <Row>
        <OneThirdColumn sm={6} md={6}>
          <InstagramFeed stretched />
        </OneThirdColumn>

        <OneThirdColumn sm={6} md={6}>
          <CircularWidget title="Activity" stretched />
        </OneThirdColumn>

        <OneThirdColumn sm={12} md={12}>
          <SaleChart title="Yearly Sales Data" stretched />
        </OneThirdColumn>
      </Row>
    </LayoutWrapper>
  );
};

export default Widget;
