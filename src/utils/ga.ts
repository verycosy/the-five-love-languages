import ReactGA from 'react-ga4';
import { Logger } from './logger';

type CustomEventName = 'start_test' | 'retry_test' | 'result';
type PresetEventName = 'share';

export class GA4 {
  static initialize() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('G-VVRCXVV6GD');
    } else {
      Logger.log(`개발모드 - GA4 비활성화`);
    }
  }

  static pageview(path: string): void {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.send({ hitType: 'pageview', page: path });
    } else {
      Logger.log(`pageview - ${path}`);
    }
  }

  static event(
    name: CustomEventName | PresetEventName,
    params?: Record<string, any>
  ) {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.event(name, params);
    } else {
      Logger.log(`event - ${name} ${JSON.stringify(params) ?? ''}`);
    }
  }
}
