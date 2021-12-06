import { FunctionComponent } from 'react'

import Svg, { Path, Rect } from 'react-native-svg'

type IllustrationsProps<T = Record<string, unknown>> = T & {
  size: number
}

type Resize = (_: { height: number; size: number; width: number }) => {
  height: number
  width: number
}

const resize: Resize = ({ height, size, width }) => {
  let newHeight = size

  let newWidth = size

  if (height > width) {
    newHeight = size

    newWidth = (size * width) / height
  } else if (height < width) {
    newHeight = (size * height) / width

    newWidth = size
  }

  return {
    height: newHeight,
    width: newWidth
  }
}

const Delivery: FunctionComponent<IllustrationsProps> = ({ size }) => (
  <Svg
    {...resize({ height: 255, size, width: 327 })}
    fill="none"
    viewBox="0 0 327 255"
  >
    <Path
      d="M54.888 45.446C20.65 58.152 29.04 161.743 37.515 211.95c0 .683 1.356 2.049 6.78 2.049 6.78 0 21.187-13.833 46.187-7.173 20.001 5.329 39.973 5.636 47.459 5.124 1.554-22.713 3.729-79.308 0-123.982-4.661-55.843-40.255-58.405-83.053-42.523z"
      fill="#F4F5F6"
    />
    <Path
      d="M127.278 103.812c-1.854 0-3.73.474-3.032 3.05.072.266 1.343 1.186 1.667 1.381.521.314 1.651.825 2.196-.18.343-.633.831-1.117.831-1.915 0-.901-.868-2.336-1.513-2.336-.685 0-2.117 2.867-1.257 2.921.863.053 1.662-.075 1.662-1.169"
      stroke="#01221D"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M37.515 212C29.04 161.778 20.65 58.157 54.888 45.448c42.798-15.886 78.392-13.324 83.053 42.535 3.729 44.687 1.554 101.298 0 124.017"
      stroke="#01221D"
      strokeWidth={1.42}
    />
    <Path
      d="M147.229 61.556l5.873-.235M135.305 40.835L139.662 36M142.411 52.093l4.862-3.301"
      stroke="#01040D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M274.2 26.48c1.68 7.436-2.587 9.615-6.378 10.387 7.082.204 7.899 1.218 9.836 8.716-.802-5.614-.757-9.715 6.688-12.272-1.476.288-8.799 3.579-10.146-6.831z"
      stroke="#01040D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M153.264 88.594c1.718-33.149 19.773-27.43 34.825-28.938 11.832-1.21 8.559-8.72 12.235-15.311a8.054 8.054 0 011.099-1.531 6.115 6.115 0 01-1.658-2.507 6.057 6.057 0 01-.257-2.985 6.09 6.09 0 011.204-2.749 6.186 6.186 0 012.379-1.854 6.251 6.251 0 015.857.428 6.15 6.15 0 012.077 2.18c.499.885.768 1.88.783 2.894 5.603-.36 11.043 2.296 11.136 10.335-2.406 0-6.322-3.499-6.965-8.13-2.105 6.46-11.345 7.51-11.933 9.293-.449 4.463-1.223 13.78-5.912 20.785-13.721-1.508-21.855 10.281-44.87 18.09z"
      fill="#01040D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M198.639 69.188c-.332-1.709 2.411-7.156 3.852-9.47 1.664-2.688 1.117-9.43 2.126-9.959 2.311-1.133 8.613-1.876 11.663-8.725 1.295 8.105 8.221 8.519 7.227 8.297.254 1.823-1.464 7.775-1.217 7.99 6.44 5.684 7.703 7.484-1.819 5.44-1.201 3.692-2.072 6.22-2.881 9.568-4.869 4.535-18.35-.154-18.951-3.141z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M209.02 70.762c-49.199-8.006-79.337 34.87-82.163 78.108-1.494 22.878 9.29 43.107 26.964 48.757a91.524 91.524 0 001.131 14.703c1.347 12.793 70.124-.485 94.371 2.471 20.957 2.555 42.363-21.677 41.031-28.389-6.364-32.084-2.895-102.857-81.334-115.65z"
      fill="#07BFA5"
    />
    <Path
      d="M198.611 66.473c1.267-4.674 4.517-5.612 5.281-16.034.285-3.864 8.77-1.604 11.803-10.326.541-1.604.965 7.72 7.249 8.474"
      stroke="#01040D"
      strokeWidth={2.13}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M212.196 50.514c-.092-.733.331-1.388.944-1.465.614-.077 1.186.454 1.278 1.186.092.732-.331 1.388-.945 1.465-.614.077-1.186-.454-1.277-1.186zM219.963 51.479c-.065-.517.232-.979.664-1.033.432-.054.834.32.899.837.065.516-.232.978-.664 1.032-.432.055-.834-.32-.899-.836z"
      fill="#01040D"
    />
    <Path
      d="M208.662 91.15c-.392-.189-.527-.722-.302-1.19.226-.47.726-.697 1.119-.509.392.189.527.722.301 1.19-.225.47-.726.697-1.118.509zM214.096 105.184a1.106 1.106 0 110-2.212 1.106 1.106 0 010 2.212z"
      fill="#01221D"
    />
    <Path
      d="M305.642 142.855c7.96-.362 7.538 7.386 6.332 11.306-.655 4.975 8.14 45.223-1.357 47.484-9.497 2.261-69.193 1.809-71.454-2.261-2.261-4.07.904-52.459 6.784-56.529 5.879-4.071 49.746.452 59.695 0z"
      fill="#F5B3A5"
    />
    <Path
      d="M305.642 142.855c7.96-.362 8.891 7.926 7.685 11.845-.654 4.975 6.787 44.684-2.71 46.945-9.497 2.261-69.193 1.809-71.454-2.261-2.261-4.071-4.515-51.074 1.364-55.144s55.166-.933 65.115-1.385z"
      fill="#FFBD59"
      stroke="#01221D"
      strokeWidth={1.42}
    />
    <Path
      d="M308.856 134.081c2.533 2.171 2.261 8.14 1.809 10.854-21.256 0-68.634.639-69.719-1.532-1.086-2.17 2.19-8.348 4.602-10.459 4.975-2.262 60.142-1.576 63.308 1.137z"
      fill="#FFBD59"
    />
    <Path
      d="M309.262 134.26c2.533 2.171 2.262 8.141 1.809 10.854-21.255 0-69.458.459-70.544-1.711"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M285.291 144.211c0-2.227-.98-6.721-1.982-9.98-.473-1.538-1.927-2.503-3.536-2.503h-6.709c-1.682 0-3.195 1.05-3.621 2.678-.958 3.655-1.549 7.89-1.789 9.805-.301 6.633-.271 19.898 2.262 19.898 3.165 0 5.879-6.331 6.331-5.879.452.452 6.783 6.331 8.592 5.879 1.809-.452.452-16.28.452-19.898z"
      fill="#FF6264"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M244.923 185.48c2.866.855 5.165 12.098-4.393 10.805 2.401 2.056 4.015 10.585-16.186 6.003-7.086-1.792-16.195-3.546-24.627-2.85.378-4.371 1.41-20.097 11.274-35.944 11.558-1.687 22.713-.56 28.043 2.139 3.149 1.255 2.732 4.537 1.425 6.155 12.093 4.317 10.392 13.36 4.464 13.692z"
      fill="#fff"
    />
    <Path
      d="M215.493 62.715c-4.839.108-6.812-4.106-7.503-9.598m14.759 23.24a44.517 44.517 0 011.468 7.49c-1.173-1.13-12.709-7.165-12.755-7.08-6.215 11.186-8.04 12.456-15.132-1.216a1.987 1.987 0 01-.334-.86m15.31 89.084c-10.315 16.903-11.069 33.194-11.434 36.935m21.02-22.046c35.266 2.912 27.25 21.264 19.49 18.436m-19.342-27.693c16.079-3.447 36.951 9.296 24.298 16.399m-24.461 3.532c25.843 2.379 28.104 20.575 3.48 13.944-7.062-1.89-16.189-3.78-24.625-3.099-2.967.256-12.964 2.363-16.895 2.487-15.769.473-27.568-4.508-29.316-5.833m57.405-119.38c0 12.394 15.893 41.489 15.45 54.713-.419 12.626 8.716 21.852 12.475 32.969m15.808-52.529c1.895 5.082 3.859 11.966 5.114 19.56m-93.668-22.659c1.895 5.082 9.081 32.807 6.409 37.183m67.984 24.541c3.667-6.972-9.756-10.574-19.878-8.188-3.301.775-6.719.054-9.554.101-13.874.209-29.083.643-37.053-2.44m22.907 2.509c-12.957 15.718-14.091 28.043-13.741 39.972M222.15 56.773a21.32 21.32 0 001.22-8.157c0-7.483-5.492-11.24-11.543-10.744a6.207 6.207 0 00-6.113-5.686 6.225 6.225 0 00-5.208 2.696 6.182 6.182 0 001.145 8.258c-4.816 5.422-1.359 14.788-11.318 16.631-16.732 3.099-37.596-5.895-42.358 21.636a55.348 55.348 0 00-.241 1.55m69.911-31.064c.311 2.464 17.866 14.873 4.001 10.845-2.851-.836-7.652-5.252-8.949-8.149m4.723 16.756c.909-3.874 1.701-4.904 3.037-9.149l-3.037 9.149z"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Hi: FunctionComponent<IllustrationsProps> = ({ size }) => (
  <Svg
    {...resize({ height: 256, size, width: 427 })}
    fill="none"
    viewBox="0 0 427 256"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M236.271 102.645c13.489-41.542 48.526-6.578 48.594-35.466l1.089.266c-.522 3.807-1.725 11.2-2.436 14.543-18.793 1.934-40.097 13.553-47.239 20.65l-.008.007zm75.921-56.275c-1.431 0-2.816.51-3.909 1.44a6.105 6.105 0 00-2.061 3.638c-4.978-4.24-12.43-5.764-16.644 2.399v-.092c-.507.975-3.026 6.602-3.503 7.751-.075.175-.143.343-.212.518l.757-.22c.28-.084 2.822-6.625 2.867-6.625 4.275 1.37 9.563-4.896 9.442-4.013a8.67 8.67 0 00.22 1.706c.756 3.807 2.958 6.228 4.66 7.941l.098-.175c.992 1.158 1.71 2.049 1.627 2.635-1.513 4.188-3.261 8.733-2.141 17.04 13.618 1.706 36.474 4.005 53.413 20.817-5.379-43.187-28.825-14.429-41.422-22.187-9.941-6.092-3.843-11.482-4.251-18.952a7.859 7.859 0 00-.258-1.568 6.016 6.016 0 004.824-1.02 6.084 6.084 0 002.472-4.291c.089-.85 0-1.71-.262-2.523a6.104 6.104 0 00-1.259-2.196 6.053 6.053 0 00-2.039-1.49 6.017 6.017 0 00-2.465-.526l.046-.007z"
      fill="#01040D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M303.378 80.092c1.029-1.393.076-5.002-.204-7.69-.182-1.759.809-4.37 1.581-6.48.605-1.629 2.186 1.98 2.746-4.811.212-2.551-3.578-2.802-3.594-.244-2.125-2.14-5.129-5.444-4.955-11.086-4.615 6.708-10.282 5.04-9.306 5.269-1.006 1.523-2.67 6.662-2.98 6.753-8.141 2.338-10.017 3.412-.719 5.65-.522 3.807-1.725 11.2-2.436 14.543 6.582-.525 18.081.525 19.867-1.904z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M301.623 80.085c48.737-.571 77.532 35.024 80.286 78.523 1.732 27.259-13.346 50.763-36.61 50.596-4.176 0 .484 4.294-3.231 6.35-24.126 13.37-56.136 6.365-79.832 9.343-20.48 2.565-43.086-4.569-42.367-11.422.484-4.621 5.114-18.882 5.213-26.535-56.455 6.13-70.928-60.303-66.404-92.335 7.99-13.569 40.098-8.003 41.944-2.246 4.766 40.179 14.677 31.095 25.905 17.915 17.764-20.862 45.212-29.84 75.096-30.19z"
      fill="#07BFA5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M283.601 146.358c-2.708-.983-11.25 6.692-3.154 11.245-3.087.252-9.465 6.16 8.783 14.262 6.514 2.695 14.556 6.601 20.601 12.076 2.346-3.731 11.046-16.965 13.043-35.452-7.838-8.093-17.075-13.705-22.787-14.634-3.178-.83-4.842 2.056-4.804 4.119-11.856-3.586-15.979 4.668-11.682 8.384z"
      fill="#fff"
    />
    <Path
      d="M298.18 60.345c.391-.61.296-1.374-.213-1.705-.509-.33-1.239-.103-1.631.509-.392.611-.297 1.374.212 1.705.509.33 1.24.103 1.632-.509zM290.881 57.858c.276-.431.21-.969-.149-1.201-.358-.233-.872-.072-1.148.36-.277.43-.21.968.148 1.2.358.233.872.072 1.149-.359zM291.167 101.381c.426 0 .772-.416.772-.929 0-.513-.346-.929-.772-.929-.426 0-.772.416-.772.929 0 .513.346.929.772.929zM287.838 119.731c.426 0 .772-.416.772-.929 0-.513-.346-.929-.772-.929-.426 0-.772.416-.772.929 0 .513.346.929.772.929z"
      fill="#01040D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M178.682 56.154c-5.296-17.772-7.967-25.888-12.673-24.274-8.004 2.688-3.268 15.403 1.831 31.317-8.874-11.208-16.947-17.216-20.805-13.34-5.387 5.413-.061 8.375 12.748 25.34-.257 6.852-.378 11.23 6.189 15.525 1.112.76.491 2.687.166 4.644 5.788 0 14.919 1.995 27.569-6.091 1.135-1.097 19.671-26.817 13.459-33.335-1.513-1.621-9.079-2.893-15.6 9.945 3.17-23.048.507-34.47-4.161-34.987-3.367-.38-6.643 8.817-8.723 25.256z"
      fill="#fff"
    />
    <Path
      d="M234.455 95.998c10.388-21.951 26.018-14.467 42.466-16.629 4.842-.64 7.83-5.49 8.912-12.236m.84-5.512c.628-3.906 1.18-4.889 2.429-7.729 2.867-6.51 10.705-7.758 17.711-2.924 2.005-5.543 8.723-5.124 10.38-.654 2.194 5.931-2.845 10.104-6.28 8.116 2.966 6.617-5.409 15.137 4.139 20.718 11.545 6.746 36.799-18.982 45.439 17.825m-67.788-37.736c-1.294 2.056-21.986 5.482-8.103 7.843 2.852.487 8.95-1.348 11.349-3.343m47.284 57.25c-1.846 4.995-8.844 32.246-6.241 36.548m-2.837-.716c.711 19.987-5.712 30.297-13.051 39.403M286.87 88.049c0 12.183-8.859 38.778-8.436 51.776.462 14.017-4.895 27.205-7.225 40.187-.696 3.883-1.763 13.553-2.966 23.497m-38.161-30.373c-3.026 4.569-6.998 28.454-8.42 34.644M163.71 90.28c-1.007.305-5.478 1.805-5.296 6.007-1.559 35.238 11.189 90.92 61.205 91.636 1.143 0 5.213.053 6.151-.762m-24.505-84.089c-12.695 10.294-32.736 11.025-42.594 6.936m36.224-21.076c-14.511 9.373-27.993 6.64-31.738 6.137m27.774-29.588c7.611-27.35-6.461-57.829-12.287-9.266-.817 6.799-5.296-34.08-15.328-22.599-3.873 4.44 2.27 23.17 4.456 30.007.318.967-13.3-19.31-20.82-13.766-7.52 5.543 12.733 24.152 12.77 25.629.197 8.269-.204 11.086 6.999 15.883m26.335-1.751c2.27-1.432 19.323-28.317 14.246-33.007-7.989-7.378-18.346 14.139-19.042 14.116-5.886-.152-16.463 9.137-14.375 15.685m126.172 76.529c-21.419-13.507-33.947-.64-10.978 8.847 6.59 2.719 14.776 6.678 20.881 12.259 2.149 1.965 8.632 9.556 11.613 11.992 11.924 9.754 24.013 12.876 26.147 12.876m-25.11-60.25c-2.028 19.339-11.099 32.512-13.036 35.656m-3.208-29.695c-29.029-18.692-33.697.404-26.018 2.81m31.662-11.117c-5.893-8.794-37.003-14.048-28.802-.654m12.4-8.482c1.309-7.615 13.822-2.452 20.238 5.428 2.096 2.574 5.167 4.043 7.339 5.764 10.591 8.414 22.129 17.802 30.133 20.132m-75.86-85.514a43.95 43.95 0 00-1.725 7.302c1.188-1.058 12.65-6.533 12.695-6.441 5.599 11.238 7.331 12.548 14.776-.594.181-.245.303-.53.356-.83m-12.907-11.878c-1.196 4.713 3.328 8.55 7.822-2.452m-8.322 1.592c4.199 2.154 7.717-.762 10.653-5.33m-134.229 26.87c-.189.875-.174 3.243-.325 3.746l.325-3.746z"
      stroke="#01040D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M78.5 31.47C37.523 30.156.885 22.47.026 26.147-1.027 30.686 29.897 43.43 43.9 58.41l8.076-6.58 6.5 3.02 5.163 2.627-1.226-13.505L78.5 31.47z"
      fill="#FF914D"
    />
    <Path
      d="M126.976 48.755c-5.644-2.524-30.844-10.9-45.167-12.986M88.861 53.202c-6.87-2.166-14.61-5.346-21.193-7.086M77.332 32.22a416.499 416.499 0 00-33.33 25.35m19.499-.508L62.07 43.87l-26.855-7.23-26.854-7.231 27.57 13.827 27.57 13.827zM55.59 63.18a47.606 47.606 0 00-9.16-4.47"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Logo: FunctionComponent<IllustrationsProps<{ white?: boolean }>> = ({
  size,
  white
}) => (
  <Svg
    {...resize({ height: 35, size, width: 158 })}
    fill="none"
    viewBox="0 0 158 35"
  >
    <Rect y={1} width={32} height={32} rx={6.526} fill="#07BFA5" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.511 8.332a1.6 1.6 0 10-1.067.078c.748 5.16 5.19 9.123 10.556 9.123 5.367 0 9.808-3.963 10.556-9.123a1.6 1.6 0 10-1.067-.078c-.706 4.606-4.685 8.135-9.49 8.135-4.803 0-8.783-3.529-9.488-8.135z"
      fill="#fff"
    />
    <Path
      d="M52.216 27.182c-1.335 0-2.53-.217-3.588-.65-1.057-.433-1.907-1.075-2.548-1.924-.624-.85-.953-1.872-.988-3.068h4.732c.07.676.303 1.196.702 1.56.399.347.919.52 1.56.52.659 0 1.179-.147 1.56-.442.381-.312.572-.737.572-1.274 0-.45-.156-.823-.468-1.118a3.47 3.47 0 00-1.118-.728c-.433-.19-1.057-.407-1.872-.65-1.179-.364-2.14-.728-2.886-1.092a5.332 5.332 0 01-1.924-1.612c-.537-.71-.806-1.638-.806-2.782 0-1.699.615-3.025 1.846-3.978 1.23-.97 2.834-1.456 4.81-1.456 2.01 0 3.631.485 4.862 1.456 1.23.953 1.89 2.288 1.976 4.004h-4.81c-.035-.59-.251-1.049-.65-1.378-.399-.347-.91-.52-1.534-.52-.537 0-.97.147-1.3.442-.33.277-.494.685-.494 1.222 0 .59.277 1.049.832 1.378.555.33 1.421.685 2.6 1.066 1.179.399 2.132.78 2.86 1.144a5.435 5.435 0 011.924 1.586c.537.693.806 1.586.806 2.678 0 1.04-.269 1.985-.806 2.834-.52.85-1.283 1.525-2.288 2.028-1.005.503-2.193.754-3.562.754zm18.31-14.846c1.664 0 2.999.555 4.004 1.664 1.005 1.092 1.508 2.6 1.508 4.524V27h-4.42v-7.878c0-.97-.251-1.725-.754-2.262-.503-.537-1.179-.806-2.028-.806-.85 0-1.525.269-2.028.806-.503.537-.754 1.291-.754 2.262V27h-4.446V7.76h4.446v6.682c.45-.641 1.066-1.153 1.846-1.534s1.655-.572 2.626-.572zm15.206 14.872c-1.422 0-2.704-.303-3.848-.91a6.774 6.774 0 01-2.678-2.6c-.642-1.127-.962-2.444-.962-3.952 0-1.49.329-2.8.988-3.926a6.68 6.68 0 012.704-2.626c1.144-.607 2.426-.91 3.848-.91 1.421 0 2.704.303 3.848.91a6.68 6.68 0 012.704 2.626c.658 1.127.988 2.435.988 3.926 0 1.49-.338 2.808-1.014 3.952a6.686 6.686 0 01-2.73 2.6c-1.144.607-2.427.91-3.848.91zm0-3.848c.849 0 1.568-.312 2.158-.936.606-.624.91-1.517.91-2.678s-.295-2.054-.884-2.678a2.774 2.774 0 00-2.132-.936c-.867 0-1.586.312-2.158.936-.572.607-.858 1.5-.858 2.678 0 1.161.277 2.054.832 2.678a2.775 2.775 0 002.132.936zm14.396-8.814c.434-.676 1.032-1.222 1.794-1.638.763-.416 1.656-.624 2.678-.624 1.196 0 2.28.303 3.25.91.971.607 1.734 1.473 2.288 2.6.572 1.127.858 2.435.858 3.926 0 1.49-.286 2.808-.858 3.952-.554 1.127-1.317 2.002-2.288 2.626-.97.607-2.054.91-3.25.91-1.005 0-1.898-.208-2.678-.624-.762-.416-1.36-.953-1.794-1.612v8.944h-4.446V12.492h4.446v2.054zm6.344 5.174c0-1.11-.312-1.976-.936-2.6-.606-.641-1.36-.962-2.262-.962-.884 0-1.638.32-2.262.962-.606.641-.91 1.517-.91 2.626 0 1.11.304 1.985.91 2.626.624.641 1.378.962 2.262.962.884 0 1.638-.32 2.262-.962.624-.659.936-1.543.936-2.652z"
      fill={white ? '#FFF' : '#01040D'}
    />
    <Path
      d="M117.775 14.546c.433-.676 1.031-1.222 1.794-1.638.762-.416 1.655-.624 2.678-.624 1.196 0 2.279.303 3.25.91.97.607 1.733 1.473 2.288 2.6.572 1.127.858 2.435.858 3.926 0 1.49-.286 2.808-.858 3.952-.555 1.127-1.318 2.002-2.288 2.626-.971.607-2.054.91-3.25.91-1.006 0-1.898-.208-2.678-.624-.763-.416-1.361-.953-1.794-1.612v8.944h-4.446V12.492h4.446v2.054zm6.344 5.174c0-1.11-.312-1.976-.936-2.6-.607-.641-1.361-.962-2.262-.962-.884 0-1.638.32-2.262.962-.607.641-.91 1.517-.91 2.626 0 1.11.303 1.985.91 2.626.624.641 1.378.962 2.262.962.884 0 1.638-.32 2.262-.962.624-.659.936-1.543.936-2.652zm20.532-.208c0 .416-.026.85-.078 1.3h-10.062c.07.901.356 1.595.858 2.08.52.468 1.153.702 1.898.702 1.11 0 1.881-.468 2.314-1.404h4.732a6.393 6.393 0 01-1.326 2.574 6.448 6.448 0 01-2.366 1.794c-.953.433-2.019.65-3.198.65-1.421 0-2.686-.303-3.796-.91a6.475 6.475 0 01-2.6-2.6c-.624-1.127-.936-2.444-.936-3.952s.304-2.825.91-3.952a6.475 6.475 0 012.6-2.6c1.11-.607 2.384-.91 3.822-.91 1.404 0 2.652.295 3.744.884a6.259 6.259 0 012.548 2.522c.624 1.092.936 2.366.936 3.822zm-4.55-1.17c0-.763-.26-1.37-.78-1.82-.52-.45-1.17-.676-1.95-.676-.745 0-1.378.217-1.898.65-.502.433-.814 1.049-.936 1.846h5.564zm11.342-3.432a5.743 5.743 0 011.95-1.872 4.955 4.955 0 012.6-.702v4.706h-1.222c-1.11 0-1.942.243-2.496.728-.555.468-.832 1.3-.832 2.496V27h-4.446V12.492h4.446v2.418z"
      fill="#07BFA5"
    />
  </Svg>
)

const LogoIcon: FunctionComponent<IllustrationsProps> = ({ size }) => (
  <Svg
    {...resize({ height: 48, size, width: 48 })}
    fill="none"
    viewBox="0 0 48 48"
  >
    <Rect width={48} height={48} rx={10} fill="#07BFA5" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.767 10.997a2.4 2.4 0 10-1.6.118C9.289 18.855 15.95 24.8 24 24.8s14.712-5.945 15.834-13.685a2.401 2.401 0 10-1.6-.118C37.176 17.907 31.206 23.2 24 23.2c-7.205 0-13.175-5.293-14.233-12.203z"
      fill="#fff"
    />
  </Svg>
)

const OpenStore: FunctionComponent<IllustrationsProps> = ({ size }) => (
  <Svg
    {...resize({ height: 256, size, width: 327 })}
    fill="none"
    viewBox="0 0 327 256"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97.057 42.913c8.358 25.1-6.834 40.927-31.64 43.675-31.564-4.2-38.528-25.446-31.844-43.695 11.056-30.14 52.222-33.905 63.484.02z"
      fill="#FFBD59"
    />
    <Path
      d="M34.355 36.764c1.378 2.003 2.306 3.042 3.095 5.45M77.695 24.308c2.047-1.126 3.144-1.953 5.418-2.336M94.723 77.246c2.183.451 3.48.586 5.417 1.557M54.477 28.2c1.678 4.575 8.036 29.536 5.671 33.476M93.95 63.233c-4.545-1.289-29.038-5.067-32.507-1.846M86.21 39.1c-4.07 2.404-24.135 17.309-24.767 21.797"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M161.301 86.588a5.383 5.383 0 00-2.134.436c-.674.289-1.28.712-1.781 1.244a5.287 5.287 0 00-1.427 3.987 5.302 5.302 0 001.971 3.752 5.386 5.386 0 004.112 1.125 6.65 6.65 0 00-.173 1.166c-.361 6.505 5.022 11.168-3.754 16.487-11.119 6.749-32.823-15.54-37.565 22.03 14.953-14.619 36.11-19.355 48.15-20.838.989-7.227-.554-11.181-1.889-14.824-.221-1.61 6.571-5.855 5.769-11.67 2.258 3.37 6.639 4.676 8.495 3.748-3.619-7.286-10.137-6.146-14.572-2.576a5.292 5.292 0 00-1.889-2.93 5.37 5.37 0 00-3.313-1.137z"
      fill="#01221D"
      stroke="#01221D"
      strokeWidth={0.57}
      strokeMiterlimit={22.93}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M174.694 114.788c-22.359.609-41.173 8.022-53.693 22.059-21.953 46.899-27.648-9.886-36.988-2.546-.48 2.48-21.674 6.37-32.432 7.907-1.29.181-2.6 3.082-1.995 5.108 4.364 14.338 35.125 67.607 74.203 54.572 4.57 15.709-9.474 24.887 3.858 30.081 22.619 8.75 53.354 1.337 74.19 3.937 18.009 2.253 36.137-2.132 35.512-8.142-.426-4.057-3.127-10.695-3.214-17.38 19.446 4.279 48.079-8.081 46.762-81.672-.147-8.121-37.215-11.952-38.466-7.56-2.581 20.228-1.962 26.464-6.652 25.869-10.412-1.35-10.119-33.616-61.085-32.233z"
      fill="#07BFA5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M180.442 133.01c-.223.022-.431.11-.587.248a.798.798 0 00-.274.513.54.54 0 00-.006.259.575.575 0 00.117.239.695.695 0 00.219.178.813.813 0 00.285.085c.223-.021.431-.109.588-.248a.788.788 0 00.272-.513.545.545 0 00-.111-.499.681.681 0 00-.219-.177.814.814 0 00-.284-.085z"
      fill="#01221D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M167.916 116.081c-.902-1.251-.067-4.491.179-6.903.285-2.803-2.653-8.018-2.076-8.811 1.326-1.784 5.968-4.818 5.775-11.496 4.045 6.022 9.569 3.69 8.72 3.896.875 1.367 1.784 6.835 2.049 6.896 7.134 2.099 8.779 3.062.63 5.072.457 3.417 1.511 10.054 2.135 13.054-5.776-.464-15.841.452-17.412-1.708z"
      fill="#fff"
    />
    <Path
      d="M167.623 114.745c-.235-3.404 1.344-5.726-1.552-13.271-1.183-3.064 6.31-4.555 5.511-12.413-.142-1.41 3.561 5.543 8.736 3.718"
      stroke="#01221D"
      strokeWidth={2.13}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M173.509 99.525a.758.758 0 01-.756-.761c0-.42.338-.761.756-.761a.76.76 0 01.757.76.76.76 0 01-.757.762zM180.319 97.242a.76.76 0 01-.757-.76.76.76 0 01.757-.762c.417 0 .756.34.756.761 0 .42-.339.761-.756.761z"
      fill="#01221D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M295.255 102.885c1.101-.407 7.389.677 7.343 4.125 9.432 2.513-2.315 11.122-22.367 15.762-1.738.4-1.546 4.105-3.171 4.837-17.757 7.248-44.402 2.215-28.131-18.851 6.195-6.49 13.996-10.73 18.506-11.516 8.08.054 8.232 2.622 6.687 5.209 11.183-3.19 19.096-3.278 21.133.434z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M183.468 147.469a1.034 1.034 0 00-.589.247.79.79 0 00-.272.514.54.54 0 00-.006.259.575.575 0 00.117.239.688.688 0 00.22.178.807.807 0 00.284.085c.224-.021.432-.109.589-.248a.788.788 0 00.272-.513.545.545 0 00-.111-.499.685.685 0 00-.22-.177.807.807 0 00-.284-.085z"
      fill="#01221D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.454 125.124c-1.166-.145-7.103 2.233-6.31 5.523-8.71 4.447 4.664 10.082 25.323 10.141 1.792 0 2.398 3.575 4.151 3.918 12.402 2.114 27.895-2.933 30.334-11.726 1.086-3.925-.926-9.25-6.484-14.396-9.083-4.955-9.67 1.044-24.123-4.116-5.165-1.843-5.664 1.903-3.865 5.814-10.476-.641-16.093.872-19.026 4.842z"
      fill="#fff"
    />
    <Path
      d="M178 97.7c1.157 1.791 19.274 4.902 7.105 6.893-2.506.413-7.856-1.232-9.929-2.991m104.245 9.691c22.225-7.992 34.387-4.089 20.743 4.663-5.091 3.257-15.951 4.935-20.996 7.326-1.216.566-1.256 3.863-1.768 4.136-5.316 2.784-25.494 6.94-34.327-4.163m31.184-15.452c2.087-1.572 25.255-8.578 28.831-1.125m-35.604.273c9.91-8.166 26.126-7.447 28.114-3.803m-49.933 21.486c-9.039-18.209 30.267-33.122 28.964-22.392m-53.076 29.845c2.193 1.619 7.457 11.616 12.468 14.933 5.317 3.543 8.075-15.899 8.387-25.549m-1.269 20.907c16.881 6.54 29.755 4.975 38.415.073m-51.774 21.46c-2.904 5.468 4.054 42.393 9.644 61.942m41.611-99.001c.665.267 1.263 1.705 1.33 3.57 1.05 30.825-7.59 79.532-41.605 80.152-.778 0-3.543.046-4.181-.666m-51.335-86.999c0 10.657 7.783 33.922 7.411 45.291-.406 12.262 4.3 23.798 6.347 35.154.611 3.397 1.548 11.855 2.605 20.554m-8.102-105.381a38.328 38.328 0 011.516 6.387c-1.044-.926-11.113-5.715-11.153-5.635-4.918 9.831-6.44 10.977-12.98-.519a1.718 1.718 0 01-.312-.726m3.423-12.495c2.299 4.276 6.121 4.662 9.564 1.432m-47.487 31.97c3.954 4.316 9.052 28.18 6.061 44.238m-88.946-40.395c-2.658 1.239-1.807 5.208-1.03 6.853 16.383 34.568 53.927 76.955 90.308 40.569m-46.915-38.431c-15.047 10.078-27.954 11.37-37.471 8.473m-8.407-30.399c-23.428-2.937-34.454 3.537-19.228 9.078 5.676 2.065 16.616 1.333 22.079 2.531 1.33.287 2.067 3.497 2.658 3.65 5.77 1.559 25.103 1.998 31.304-10.77m-32.507-9.058c-2.379-1.079-26.485-2.85-28.379 5.209m34.806-7.52c-11.451-5.801-27.116-1.552-28.266 2.438m53.409 10.044c2.366-9.625-5.982-20.081-15.393-18.769-12.927 1.798-22.344-7.833-18.995 3.257m16.443 4.222c-2.745 1.839-3.901 4.19-3.988 6.381m121.672-30.731a18.413 18.413 0 00-2.087-6.774c-3.21-6.66-10.129-6.827-14.788-2.664a5.332 5.332 0 00-1.661-2.53 5.31 5.31 0 00-7.982 1.323 5.336 5.336 0 002.561 7.69 5.305 5.305 0 003.008.29c-1.422 5.868 4.406 11.75-2.466 16.792-12.328 9.044-38.229-16.765-43.811 21.033m69.745-18.223c-.725-3.33-1.27-8.319-1.815-12.102l1.815 12.102z"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M253.99 18.629c.857-.125 1.637-.51 2.427-.855.606-.265 1.255-.453 1.884-.652 1.236-.392 2.494-.686 3.733-1.067.455-.14.95-.22 1.415-.317.42-.087.851-.235 1.275-.282 1.328-.149 2.632-.513 3.952-.714 4.807-.734 9.655-1.19 14.528-1.19 2.323 0 4.688-.135 6.984.277.809.146 1.621.372 2.44.441.35.03.676.199 1.03.238.245.028.641.132.867.234.62.277 1.463.45 2.129.573.77.14 1.483.482 2.243.621.486.089.738 1.199.833 1.582"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <Path
      d="M300.443 33.441c-16.986-3.707-36.423-1.374-46.737.805-2.065.436-3.547 2.194-3.698 4.298-.867 12.035-1.629 35.097 2.137 38.044 4.177 3.268 8.818 0 18.099 1.4 14.044 1.24 22.869.765 27.805-.058 3.046-.508 4.88-3.131 5.149-6.208 1.15-13.13 1.992-32.974-1.225-37.438-.354-.491-.938-.713-1.53-.843z"
      fill="#FF6264"
    />
    <Path
      d="M299.016 16.371c.464.934 1.205 2.556 1.547 3.289.505 1.085 1.233 2.047 1.822 3.085a32.54 32.54 0 012.313 5.024c.435 1.2.944 2.441 1.122 3.71.144 1.032.821 1.955.85 3.015.022.815.158 1.336-.298 2.062-.247.394-.512.556-.964.556-.656 0-1.315.018-1.971 0-.344-.01-1.056-.17-1.324-.415-.737-.674-1.161-1.558-1.577-2.441-.63-1.338-1.11-2.704-1.402-4.17-.234-1.177-.389-2.408-.666-3.569-.326-1.37-.435-2.822-.832-4.169-.234-.794-.221-1.686-.508-2.468-.165-.448-1.159-4.038-1.36-4.442M300.676 35.684c-.292 1.341-1.66 1.269-2.76 1.269-.591 0-1.179-.462-1.34-1.031-.128-.45-.293-.892-.412-1.349-.141-.537-.195-1.103-.342-1.63-.394-1.415-.384-2.952-.745-4.381-.247-.978-.418-1.986-.648-2.97-.243-1.04-.657-2.016-.929-3.041a72.688 72.688 0 00-.591-2.089c-.216-.723-.382-1.464-.574-2.195-.091-.343-1.208-3.45-1.208-3.763M295.767 34.128c-.417.555-1.143 1.233-1.873 1.714-.911.601-1.839.601-3.15.075-.878-.088-1.28-1.062-1.468-1.789-.129-.503-.389-.968-.49-1.476-.108-.544-.173-1.105-.298-1.644-.597-2.575-.901-5.222-1.236-7.831a19.64 19.64 0 00-.832-3.614c-.133-.401-1.387-5.79-1.79-5.993"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <Path
      d="M289.271 34.11c-.329.436-.675.715-1.059 1.102-.25.252-.595.69-.942.789-.259.074-.527.279-.789.379-.295.113-.787.017-1.104.017-.88 0-1.72-.852-2.09-1.595-.595-1.198-1.261-2.371-1.7-3.64-.327-.946-.747-1.84-1.02-2.803-.298-1.048-.453-2.128-.71-3.19-.487-2.01-.836-4.13-1.109-6.183-.176-1.334-.559-2.661-.626-4.006-.013-.25-.04-.646-.14-.873-.035-.078-.018-.62-.018-.317M282.301 33.7c-.018.48-.156.901-.315 1.35-.1.28-.322.505-.395.797-.068.273-.344.67-.552.868-.546.52-1.391.634-2.111.634-.759 0-1.378.083-1.972-.493-.818-.793-1.273-1.725-1.674-2.776-.486-1.279-.726-2.622-1.104-3.931-.549-1.903-.771-3.837-1.148-5.774-.44-2.267-.758-4.56-1.06-6.848-.08-.605-.236-1.182-.236-1.794 0-.415-.098-.762-.098-1.23M275.362 35.366c-.549 1.363-2.088 2.46-3.549 2.46-.821 0-1.541.036-2.165-.591-.619-.623-.956-1.487-1.13-2.362-.289-1.456-.58-2.876-.745-4.363-.193-1.752-.219-3.53-.219-5.293 0-2.048-.148-4.157.114-6.187.206-1.596.255-2.454.255-4.06"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <Path
      d="M262.355 16.371c0 2.116-.432 3.583-1.074 5.598-.519 1.626-.575 3.297-.946 4.95-.384 1.71-.43 3.573-.43 5.323 0 1.422.079 3.008.71 4.314.29.6.782 1.08 1.2 1.587.356.43.653.734 1.105 1.031.294.193.891.08 1.226.08.551 0 1.144.072 1.674-.08.474-.136.879-.624 1.222-.952.31-.296.778-.73.907-1.15.115-.377.444-.708.552-1.115.07-.264.158-.641.158-.908"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <Path
      d="M260.773 36.636c-.749.753-1.668 1.827-2.795 1.978-.617.083-2.05.183-2.331-.595-.062-.17-.205-.23-.276-.396-.116-.272-.2-.544-.373-.785a3.172 3.172 0 01-.552-1.295c-.222-1.177-.298-2.288-.298-3.5 0-1.484-.014-2.914.474-4.336.615-1.794 1.456-3.514 2.287-5.231.534-1.105 1.087-2.184 1.577-3.292.368-.834.621-2.792.621-1.88"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <Path
      d="M254.385 36.001c-.376.389-.63.871-1.008 1.252-.255.256-.549.473-.806.731-.252.253-.397.48-.749.56-.428.095-.856.075-1.302.075-.545 0-.93-.179-1.402-.38-.258-.11-.533-.57-.666-.81-.2-.362-.511-.777-.613-1.186-.287-1.153-.158-2.424-.158-3.613 0-.727.007-1.364.197-2.067.259-.952.623-1.837.986-2.75.593-1.49 1.197-2.96 2.011-4.345.936-1.593 2.47-3.016 3.127-4.763M277.911 77.546c0-2.52-.761-4.979-.761-7.47 0-2.265-.381-4.5-.381-6.774 0-2.311-.254-4.601-.254-6.895 0-1.932-.313-4.14.254-5.994.25-.818.701-1.547 1.142-2.263.204-.33.472-.635.686-.97.2-.313.414-.54.556-.889 1.3-2.38 3.973-2.614 5.959-3.142 1.4-.373 3.031-.334 4.478-.334 1.279 0 2.328.316 3.328 1.121.427.343.848.719 1.262 1.11.622.587 1.006 1.226 1.404 1.983v0c.244.464.372.938.578 1.404.187.422.16.937.346 1.348.359.795.18 1.556.381 2.362.384 1.547.317 3.382.317 4.98 0 4.32.127 8.676.127 13.01 0 1.547-.043 3.087-.127 4.604-.065 1.184-.108 2.138-.51 3.251"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <Path
      d="M280.704 61.074c-.85 0-1.709.208-1.39 1.334.033.116.79.368.938.454.239.137.583.51.833.07.157-.276.38-.488.38-.836 0-.394-.593-.256-.888-.256-.314 0-.775.488-.381.511.395.023.762-.033.762-.51"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
  </Svg>
)

const Products: FunctionComponent<IllustrationsProps> = ({ size }) => (
  <Svg
    {...resize({ height: 255, size, width: 327 })}
    fill="none"
    viewBox="0 0 327 255"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M141.136 71.8c-28.239-3.156-25.682 37.18-44.26 22.648-7.595-33.756 23.832-22.685 35.871-29.041 5.328-2.83 4.176-5.94 2.861-9.69a5.952 5.952 0 01-5.898-.043 5.94 5.94 0 01-2.195-8.05 5.946 5.946 0 018.026-2.303c3.864-6.765 15.97-12.371 20.607-.787-2.148.868-6.889-.973-9.096-4.938.379 6.571-7.536 10.722-7.432 12.541 3.33 11.116-.876 12.757 1.516 19.663z"
      fill="#01221D"
      stroke="#01221D"
      strokeWidth={0.22}
      strokeMiterlimit={22.93}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M159.573 68.075c-47.74-.556-78.686 34.067-84.71 76.378-3.775 26.514 9.213 49.376 32.038 49.213 4.102 0-.609 11.213 2.878 13.212 22.631 13.005 54.556 6.192 77.558 9.088 19.887 2.495 42.593-4.444 42.414-11.109-.126-4.496-3.768-25.403-3.278-32.846 32.326-9.598 25.843-102.855-66.9-103.936z"
      fill="#07BFA5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M199.021 105.872c-4.957-1.255-30.238-2.094-31.452 4.499-.097.52 1.259 37.866 1.61 42.232 9.391 1.611 29.827 4.536 30.703-1.775-1.25-6.066 4.036-43.724-.861-44.956z"
      fill="#01221D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M160.69 127.365c2.624-.964 7.784 5.634.946 11.312a10.865 10.865 0 011.475 6.165c-.13 2.159-.9 4.228-2.208 5.932 4.258 7.472-11.111 22.751-14.401 12.291-1.796 2.01-4.515 4.483-6.596 6.411-2.272-3.661-10.701-17.492-12.635-35.633 12.884-10.766 32.445-19.112 40.213-18.754l.081 8.548c-.689 1.263-5.138 2.249-6.875 3.728z"
      fill="#fff"
    />
    <Path
      d="M165.55 102.99a.672.672 0 100-1.344.672.672 0 000 1.344zM184.69 182.907a1.007 1.007 0 100-2.014 1.007 1.007 0 000 2.014zM188.047 202.383a1.007 1.007 0 10.001-2.015 1.007 1.007 0 00-.001 2.015z"
      fill="#01221D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M172.429 157.065c-8.935-3.231-13.348-17.953 6.57-10.684 4.961 1.814 16.633-.44 19.978-3.362.623-.544.534-4.854.912-7.666 7.141-1.189 15.78 6.329 18.331 6.395 3.478.096 10.441 23.591 1.031 29.26-4.183 2.518-10.434 1.967-15.662 3.296-5.999 1.52-27.571.037-23.425-6.762-8.461-1.197-11.25-6.615-7.735-10.477zM142.564 75.107c-3.829-5.736-2.452-8.47-1.504-13.574.564-2.971-2.317-8.915-1.58-9.725 1.67-1.813 7.176-4.695 7.522-11.946 4.047 6.88 10.531 4.851 9.516 4.992.873 1.56 1.422 7.541 1.723 7.653 7.883 2.904 9.666 4.093.27 5.55.219 3.759 1.069 15.007 1.505 18.313-1.723 3.15-9.2 3.774-17.452-1.263z"
      fill="#fff"
    />
    <Path
      d="M197.87 109.974c-5.266-2.414-24.544-.364-24.663 1.389-1.064 12.862.394 19.553.201 33.745m-5.965-65.196a42.606 42.606 0 012.298 6.951c-1.249-.936-12.934-5.287-12.971-5.198-4.552 11.384-6.143 12.81-14.526.653a1.906 1.906 0 01-.416-.742m77.061 61.037c-4.805-4.166-14.072-7.679-19.175-7.129m20.201-.743c-2.172.312-3.399.416-5.511 2.785m22.312 3.75c-1.487-6.758-7.162-12.149-15.202-11.347m-3.934 9.587c7.259 9.357 6.835 28.146 2.565 31.763m19.279-11.348c-3.838 9.365-12.019 14.853-22.097 12.974m-18.141-29.913c-12.286 9.513-26.18-.179-31.022 1.537-7.712 2.74-.87 11.436 4.664 12.989-4.731 4.537-1.19 9.535 7.058 10.694 2.053.289-5.147 5.54 15.619 7.389 9.23.817 17.783-1.3 23.056-6.253M153.854 59.965c-4.261 1.745-7.467-1.344-9.988-6.045m5.727 24.507c-5.601-.609-7.602-3.431-7.951-4.203-4.277-9.41 1.487-8.912-2.231-21.106-1.042-3.439 7.355-4.397 7.155-13.019 0-1.544 3.451 6.335 9.349 4.805m10.933 70.514c-.992.113-2.001.257-3.027.43-29.602 5.11-52.606 34.399-67.005 38.558M157.03 82.95c0 9.015 4.76 21.603 6.828 32.921m.982 9.498c-.328 6.401 1.242 12.758 3.428 19.13m8.1 22.821c2.41 8.511 7.252 43.771 11.275 48.494l.075-.742m-50.286-82.269c10.554-7.575 36.281-8.986 24.596 6.416m-19.047 1.686c25.54-12.261 20.394 7.426 18.229 9.706m-12.026-1.559c21.769-9.892 10.04 24.566-1.666 16.798-3.384-2.228 6.069-9.038 1.346-4.991-3.414 2.919-6.895 6.499-9.409 8.778-2.112 1.916-8.486 9.32-11.416 11.697-11.722 9.513-23.607 12.558-25.705 12.558m24.686-58.765c1.993 18.863 10.911 31.711 12.815 34.778m-24.106-26.869c-.699 19.494 5.616 29.55 12.83 38.432m-21.755-73.336c1.815 4.872 8.695 31.451 6.136 35.647m44.834-91.433a20.476 20.476 0 00-1.733-7.709c-3.942-10.063-15.976-8.325-20.662 1.166a5.953 5.953 0 00-9.005 5.322 5.941 5.941 0 003.314 5.102 5.955 5.955 0 006.071-.48c1.168 3.565 1.978 6.95-2.655 9.81-14.556 8.964-49.46-9.654-44.261 28.859m63.219-44.885c1.13 2.094 21.085 7.152 7.319 8.288-2.834.237-8.65-2.065-10.815-4.196m10.368 15.231c-.52-3.713-.513-6.825-.781-11.08l.781 11.08zm26.538 90.186c-1.101-.616-6.858.26-11.462-1.396l11.462 1.396zm-24.418-31.436a27.352 27.352 0 016.694-3.371l-6.694 3.371z"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M148.456 50.554c.524-.282.676-1.018.339-1.643-.336-.625-1.034-.902-1.558-.62-.523.282-.675 1.017-.339 1.642.337.625 1.034.903 1.558.62zM155.313 48.519c.368-.199.474-.717.237-1.158-.237-.44-.728-.637-1.097-.438-.368.198-.474.716-.237 1.157.237.44.728.637 1.097.439zM162.041 92.824c.369-.198.475-.716.238-1.157-.238-.44-.729-.637-1.097-.439-.369.199-.475.717-.238 1.157.238.441.729.638 1.097.44z"
      fill="#01221D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M186.233 117.624c.674.405 1.131 1.009 1.275 1.686.143.676-.038 1.371-.506 1.94a2.68 2.68 0 01-.753.78 3.303 3.303 0 01-1.061.479 3.692 3.692 0 01-1.205.105 3.588 3.588 0 01-1.16-.287c-.675-.405-1.132-1.009-1.275-1.686-.143-.676.038-1.371.506-1.94a2.69 2.69 0 01.752-.78 3.318 3.318 0 011.062-.479 3.692 3.692 0 011.205-.105c.406.032.8.129 1.16.287z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.676 35.457c-2.85-4.29-4.561-6.758-7.53-10.855-5.96-8.324-1.076 5.256-.764 9.246.828 12.035 1.075 4.011-12.748 12.42-7.983 4.85 4.367 2.65 6.164 2.747 4.303.246 7.455-4.377 7.262 6.435 0 2.521-1.076 17.323 3.937 8.249 1.076-1.92 7.23-9.879 6.616-12.088.108 0 27.186 12.87 6.455-6.897-2.431-2.328-2.786-2.714.409-5.514 2.57-2.263 14.792-9.932 11.285-10.265-7.778-.74-19.827 7.466-21.086 6.522z"
      fill="#FF6264"
    />
    <Path
      d="M277.058 25.626c2.358-3 4.25-1.629 4.9-.568 6.84 2.885 20.414 9.43 20 12.528-.518 3.872-8.331 30.279-11.709 29.623-3.378-.656-32.028-15.564-31.373-18.942.656-3.377 15.234-18.89 18.182-22.641z"
      fill="#FFBD59"
    />
    <Path
      d="M266.488 50.235c4.416-6.308 14.004-19.453 17.032-21.573M275.572 55.155c3.911-6.308 12.036-19.832 13.247-23.465m-2.271 29.142c3.28-4.541 9.84-15.971 9.84-25.357"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
    />
    <Path
      d="M256.734 74.957c-5.938-19.005 6.797-17.958 13.906-15.06l4.738 2.672c15.003 11.792 2.246 17.923-6.008 19.514l-12.636-7.126z"
      fill="#FFBD59"
    />
    <Path
      d="M270.64 59.898c-7.11-2.9-19.844-3.946-13.906 15.059m12.636 7.126c3.124-.602 6.893-1.855 9.558-3.818"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
    />
    <Path
      d="M269.497 56.754c.254 2.503 2.442 7.04 9.162 5.167l-9.162-5.167z"
      fill="#FFBD59"
    />
    <Path
      d="M269.497 56.754c.254 2.503 2.442 7.04 9.162 5.167l-9.162-5.167z"
      fill="#FFBD59"
      stroke="#01221D"
      strokeWidth={1.42}
    />
    <Path
      d="M277.058 25.626c-2.948 3.75-17.526 19.264-18.182 22.641-.655 3.378 27.995 18.286 31.373 18.942 3.378.656 11.191-25.751 11.709-29.623.212-1.584-3.237-4.071-7.572-6.509"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
    />
    <Path
      d="M282.637 63.81l-.737 1.306c-.272.483-.365.987-.576 1.488-.308.73-.576 1.486-.78 2.25-.151.565-.521 1.08-.806 1.587-.199.352-.474.628-.714.946a3.234 3.234 0 01-.471.51c-.181.14-.284.442-.395.64-.079.139-.166.276-.237.419-.072.146-.041.382-.223.316M277.551 73.47a5.744 5.744 0 00-1.035.434.715.715 0 00-.335.313c-.036.065-.006.176.011.244.035.146.13.258.223.373.096.118.224.176.356.25.238.134.463.235.738.254.308.02.636-.12.788-.39.137-.242.081-.677-.07-.91-.151-.231-.331-.415-.512-.615"
      stroke="#01221D"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <Path
      d="M23.797 190.62c3.286-6.846 9.614-6.527 14.213-4.803 2.397.898 4.475 2.578 5.749 4.8 5.478 9.555-5.498 16.821-10.69 17.221-5.74.441-14.57-6.181-9.272-17.218z"
      fill="#F5B3A5"
    />
    <Path
      d="M25.563 189.737c3.285-6.845 9.614-6.526 14.212-4.803 2.398.899 4.476 2.578 5.75 4.8 5.477 9.555-5.498 16.821-10.69 17.221-5.74.441-14.57-6.181-9.272-17.218z"
      stroke="#01221D"
      strokeWidth={1.42}
    />
    <Path
      d="M49.708 208.831c3.286-6.845 9.614-6.526 14.213-4.803 2.398.899 4.475 2.579 5.749 4.8 5.478 9.555-5.497 16.822-10.69 17.221-5.74.442-14.57-6.181-9.272-17.218z"
      fill="#F5B3A5"
    />
    <Path
      d="M51.474 207.948c3.286-6.845 9.614-6.526 14.212-4.803 2.398.899 4.476 2.579 5.75 4.8 5.478 9.556-5.498 16.822-10.69 17.221-5.74.442-14.57-6.18-9.272-17.218z"
      stroke="#01221D"
      strokeWidth={1.42}
    />
    <Path
      d="M45.871 199.891c2.355-.147 7.064.707 7.064 5.298M27.328 186.646l-3.09-2.207M75.01 219.317l-3.091-2.208"
      stroke="#01221D"
      strokeWidth={1.42}
      strokeLinecap="round"
    />
  </Svg>
)

export const Illustrations = {
  Delivery,
  Hi,
  Logo,
  LogoIcon,
  OpenStore,
  Products
}
