import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageTitle from '../../components/utility/paperTitle';
import Papersheet, { DemoWrapper } from '../../components/utility/papersheet';
import {
  Row,
  // FullColumn,
  HalfColumn,
} from '../../components/utility/rowColumn';
import SimpleBadge from '../UiElements/Badges/simpleBadge.js';
import SingleCard from '../Shuffle/singleCard.js';
import BoxCard from '../../components/boxCard';
import Img7 from '../../images/7.jpg';
import user from '../../images/user.jpg';

class BadgeExamples extends Component {
  render() {
    const { props } = this;
    return (
      <LayoutWrapper>
        <Row style={{ marginBottom: '30px' }}>
          <HalfColumn>
            <PageTitle title="Content Box with Subtitle" data-single />

            <Papersheet
              title="This is title"
              subtitle="This is a long long subtitle"
              codeBlock="UiElements/Badges/simpleBadge.js"
            >
              <p>
                Two examples of badges containing text, using primary and accent
                colors. The badge is applied to its children.
              </p>

              <DemoWrapper>
                <SimpleBadge {...props} />
              </DemoWrapper>
            </Papersheet>
          </HalfColumn>

          <HalfColumn>
            <PageTitle title="Content Box without Subtitle" data-single />

            <Papersheet title="This is title" style={{ height: 364 }}>
              <p>
                Two examples of badges containing text, using primary and accent
                colors. The badge is applied to its children.
              </p>

              <DemoWrapper>
                <SimpleBadge {...props} />
              </DemoWrapper>
            </Papersheet>
          </HalfColumn>
        </Row>

        <Row style={{ marginBottom: '30px' }}>
          <HalfColumn>
            <PageTitle title="Content Box with title" data-single />

            <Papersheet title="This is title">
              <SimpleBadge {...props} />
            </Papersheet>
          </HalfColumn>

          <HalfColumn>
            <PageTitle
              title="Content Box without title & subtitle"
              data-single
            />
            <Papersheet style={{ height: 203 }}>
              <SimpleBadge {...props} />
            </Papersheet>
          </HalfColumn>
        </Row>

        <Row>
          <HalfColumn>
            <PageTitle title="Content Box demo holder" data-single />
            <Papersheet
              title="This is title"
              subtitle="This is a long long subtitle"
              style={{ height: 344 }}
            >
              <p>
                Two examples of badges containing text, using primary and accent
                colors. The badge is applied to its children.
              </p>

              <DemoWrapper>
                <SimpleBadge {...props} />
              </DemoWrapper>
            </Papersheet>
          </HalfColumn>

          <HalfColumn>
            <PageTitle title="Content Box without demo holder" data-single />
            <Papersheet
              title="This is title"
              subtitle="This is a long long subtitle"
              style={{ height: 344 }}
            >
              <p>
                Two examples of badges containing text, using primary and accent
                colors. The badge is applied to its children.
              </p>

              <SimpleBadge {...props} />
            </Papersheet>
          </HalfColumn>
        </Row>

        <Row>
          <HalfColumn>
            <PageTitle title="Shuffle Box" data-single />

            <SingleCard title="Hello" src={Img7} grid />
          </HalfColumn>

          <HalfColumn>
            <PageTitle title="Box Card" data-single />

            <BoxCard
              title="David Doe"
              date="3 minutes ago"
              img={user}
              message="A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner"
            />

            <BoxCard
              title="David Doe"
              date="3 minutes ago"
              message="A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner"
            />

            <BoxCard
              title="David Doe"
              message="A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner"
            />
          </HalfColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
export default withStyles({})(BadgeExamples);
