import { FunctionComponent } from 'react'

import { createIcon, Icon, IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

const viewBox = '0 0 20 20'

const Back = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M18.3337 10H1.66699"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M7.50033 15.8332L1.66699 9.99984L7.50033 4.1665"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Cart = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M5 1.66663L2.5 4.99996V16.6666C2.5 17.1087 2.67559 17.5326 2.98816 17.8451C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8451C17.3244 17.5326 17.5 17.1087 17.5 16.6666V4.99996L15 1.66663H5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M2.5 5H17.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M13.3334 8.33337C13.3334 9.21743 12.9822 10.0653 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11597 11.6667 8.26812 11.3155 7.643 10.6904C7.01788 10.0653 6.66669 9.21743 6.66669 8.33337"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Dropdown = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.40874 12.2553L6.07778 8.92597C5.92106 8.76932 5.83301 8.55685 5.83301 8.33531C5.83301 7.87398 6.20717 7.5 6.66872 7.5L13.3306 7.5C13.5523 7.5 13.7648 7.58801 13.9216 7.74466C14.2479 8.07087 14.2479 8.59976 13.9216 8.92597L10.5906 12.2553C10.2642 12.5816 9.7351 12.5816 9.40874 12.2553Z"
      //   fill="none"
      stroke="currentColor"
    />
  ]
})

const Email = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M3.33366 3.3335H16.667C17.5837 3.3335 18.3337 4.0835 18.3337 5.00016V15.0002C18.3337 15.9168 17.5837 16.6668 16.667 16.6668H3.33366C2.41699 16.6668 1.66699 15.9168 1.66699 15.0002V5.00016C1.66699 4.0835 2.41699 3.3335 3.33366 3.3335Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M18.3337 5L10.0003 10.8333L1.66699 5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Eye: FunctionComponent<IIconProps & { hide?: boolean }> = ({
  hide,
  ...props
}) => (
  <Icon {...{ viewBox, ...props }}>
    <Path
      key={Math.random()}
      d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      key={Math.random()}
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {hide ? (
      <Path
        key={Math.random()}
        d="M17 3L3 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <></>
    )}
  </Icon>
)

const Facebook = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M15 1.66663H12.5C11.395 1.66663 10.3352 2.10561 9.55376 2.88701C8.77236 3.66842 8.33337 4.72822 8.33337 5.83329V8.33329H5.83337V11.6666H8.33337V18.3333H11.6667V11.6666H14.1667L15 8.33329H11.6667V5.83329C11.6667 5.61228 11.7545 5.40032 11.9108 5.24404C12.0671 5.08776 12.279 4.99996 12.5 4.99996H15V1.66663Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Home = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M2.5 7.49996L10 1.66663L17.5 7.49996V16.6666C17.5 17.1087 17.3244 17.5326 17.0118 17.8451C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8451C2.67559 17.5326 2.5 17.1087 2.5 16.6666V7.49996Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M7.5 18.3333V10H12.5V18.3333"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const List = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M17.5 8H2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M17.5 4H2.5"
      stroke="#01040D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M17.5 12H2.5"
      stroke="#01040D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M17.5 16H2.5"
      stroke="#01040D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Lock = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M5.83301 9.1665V5.83317C5.83301 4.7281 6.27199 3.66829 7.0534 2.88689C7.8348 2.10549 8.89461 1.6665 9.99967 1.6665C11.1047 1.6665 12.1646 2.10549 12.946 2.88689C13.7274 3.66829 14.1663 4.7281 14.1663 5.83317V9.1665"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Phone = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Search = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M17.5 17.5L13.875 13.875"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

const Twitter = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M19.1666 2.49996C18.3686 3.06285 17.4851 3.49338 16.55 3.77496C16.0481 3.19788 15.3811 2.78887 14.6392 2.60323C13.8973 2.41759 13.1162 2.46429 12.4017 2.737C11.6872 3.00972 11.0737 3.49529 10.6441 4.12805C10.2146 4.76082 9.98973 5.51024 9.99998 6.27496V7.10829C8.53551 7.14626 7.08437 6.82147 5.77582 6.16283C4.46727 5.50419 3.34191 4.53215 2.49998 3.33329C2.49998 3.33329 -0.833354 10.8333 6.66665 14.1666C4.95042 15.3316 2.90594 15.9157 0.833313 15.8333C8.33331 20 17.5 15.8333 17.5 6.24996C17.4992 6.01783 17.4769 5.78629 17.4333 5.55829C18.2838 4.71953 18.884 3.66055 19.1666 2.49996Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  ]
})

const User = createIcon({
  viewBox,
  path: [
    <Path
      key={Math.random()}
      d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})

export default {
  Back,
  Cart,
  Dropdown,
  Email,
  Eye,
  Facebook,
  Home,
  List,
  Lock,
  Phone,
  Search,
  Twitter,
  User
}
