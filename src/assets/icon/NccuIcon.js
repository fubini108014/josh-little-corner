import * as React from "react";

const NccuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    {...props}
    width={35}
    height={35}
  >
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
      d="M189.992 45.512c-.844 0-1.691 0-2.539.168-2.879-10.02-8.297-19.02-16.254-27C158.668 6.28 143.598 0 125.984 0c-17.777 0-32.847 6.281-45.21 18.68-7.618 7.644-13.036 16.304-15.915 25.812h-.847c-17.782 0-33.02 6.281-45.383 18.68C6.098 75.738-.164 90.852.004 108.684c-.168 17.832 6.094 32.945 18.625 45.34 2.71 2.886 5.758 5.433 8.976 7.644-2.878 7.3-4.234 15.11-4.066 23.434-.168 17.832 6.098 32.949 18.629 45.343 12.36 12.563 27.602 18.848 45.379 18.848 14.734 0 27.601-4.414 38.61-13.074 11.343 8.66 24.554 13.074 39.28 13.074 17.614 0 32.684-6.285 45.215-18.848 12.532-12.394 18.793-27.511 18.793-45.343 0-7.641-1.183-14.946-3.554-21.57 3.218-2.712 6.265-5.598 9.312-8.485 12.363-12.399 18.629-27.512 18.797-45.344-.168-17.832-6.434-32.945-18.797-45.512-12.527-12.394-27.598-18.68-45.21-18.68Zm-5.418 2.375c0 .343.172.68.676.851.172.168.512.34 1.02.34 1.183-.172 2.539-.172 3.722-.172 16.766 0 30.988 5.946 42.844 17.664 11.855 11.887 17.781 26.32 17.781 43.133-.172 16.813-6.097 31.246-17.781 42.965-3.219 3.055-6.606 5.941-9.992 8.828-.34.172-.508.512-.508 1.024a1.079 1.079 0 0 0 0 1.011c2.543 6.625 3.726 13.93 3.726 21.57 0 16.817-5.93 31.25-17.78 42.97-11.856 11.886-26.079 17.824-42.845 17.824-14.558 0-27.257-4.415-38.265-13.247-.34-.164-.68-.335-1.016-.335-.508 0-.847.171-1.015.507-10.668 8.66-23.2 13.075-37.594 13.075-16.762 0-31.156-5.938-43.008-17.825-11.855-11.718-17.781-26.152-17.613-42.968-.168-8.325 1.187-16.133 4.406-23.434.168-.34.168-.676 0-1.188-.172-.34-.34-.683-.68-.847-3.554-2.38-6.773-5.098-9.652-7.985C9.148 139.93 3.223 125.496 3.39 108.684 3.224 91.87 9.149 77.434 21 65.55c11.855-11.719 26.246-17.664 43.012-17.664h2.203c.336 0 .676-.168 1.015-.34.168-.168.336-.508.508-.848 2.707-9.511 7.785-17.996 15.407-25.64 11.683-11.723 26.078-17.664 42.84-17.664 16.765 0 30.992 5.94 42.843 17.664 7.79 7.812 13.04 16.812 15.746 26.828Zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
      d="M186.61 55.871c-2.036 0-3.895-.508-5.423-1.7-1.695-1.187-2.71-2.718-3.214-4.585-2.543-8.828-7.114-16.645-14.055-23.602-10.5-10.53-23.2-15.797-37.934-15.797-14.898 0-27.597 5.266-38.097 15.626l-.168.171c-6.606 6.621-11.008 14.09-13.38 22.582-.507 1.868-1.523 3.23-3.046 4.418-1.523 1.188-3.219 1.7-5.082 1.7H63.84c-14.899 0-27.598 5.265-38.098 15.625l-.172.168C15.242 81 9.992 93.738 9.992 108.684c0 14.945 5.25 27.68 15.75 38.039 2.707 2.714 5.586 5.097 8.637 7.3 1.691 1.024 2.879 2.547 3.387 4.586.507 1.871.507 3.735-.34 5.606-2.54 6.453-3.895 13.414-3.895 20.887 0 14.945 5.25 27.68 15.75 38.039 10.496 10.703 23.196 15.964 38.098 15.964 12.7 0 23.875-3.906 33.36-11.718a8.735 8.735 0 0 1 5.417-1.864c1.864-.175 3.727.504 5.418 1.864 9.653 7.812 20.996 11.718 33.863 11.718 14.735 0 27.434-5.261 37.934-15.792l.168-.172c10.5-10.36 15.746-23.094 15.746-38.04 0-6.96-1.183-13.413-3.383-19.359-.68-1.699-.68-3.398-.168-5.262.504-1.87 1.352-3.226 2.88-4.417 3.214-2.543 6.433-5.266 9.312-8.153l.168-.164c10.328-10.36 15.578-23.098 15.578-38.043s-5.25-27.683-15.746-38.21c-10.5-10.524-23.2-15.794-37.934-15.794-1.183 0-2.367 0-3.383.172Zm-5.926 23.774c14.39 14.437 21.671 31.753 21.671 52.308 0 20.543-7.28 37.863-21.671 52.297-14.399 14.434-31.668 21.57-51.989 21.742-20.488-.172-37.761-7.308-52.156-21.742-14.39-14.434-21.504-31.754-21.504-52.297 0-20.555 7.113-37.871 21.504-52.308 14.395-14.434 31.668-21.563 52.156-21.563 20.32 0 37.59 7.129 51.989 21.563Zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
      d="M195.922 131.953c0-18.687-6.606-34.644-19.813-47.89-13.039-13.079-28.957-19.7-47.582-19.7-18.629 0-34.547 6.621-47.582 19.7-13.039 13.246-19.644 29.203-19.644 47.89 0 18.68 6.605 34.64 19.644 47.711 13.035 13.246 28.953 19.871 47.582 19.871 18.625 0 34.543-6.625 47.582-19.87 13.207-13.071 19.813-29.032 19.813-47.712Zm-22.184-45.516c12.532 12.567 18.793 27.68 18.793 45.516 0 17.828-6.261 32.942-18.793 45.336-12.363 12.57-27.433 18.856-45.21 18.856-17.782 0-32.852-6.286-45.212-18.856-12.53-12.394-18.796-27.508-18.629-45.336-.167-17.836 6.098-32.95 18.63-45.516 12.359-12.398 27.43-18.68 45.21-18.68 17.778 0 32.848 6.282 45.211 18.68Zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
      d="M166.625 85.25c-.508-.512-1.188-.852-1.86-.852h-31.667c-.68 0-1.184.34-1.692.852-.508.508-.847 1.02-.847 1.7v14.433c0 .68.34 1.36.847 1.867.508.512 1.012.68 1.692.68h31.836v1.02c-.512 3.226-1.016 5.94-1.696 8.491v-.175c-.847 2.21-2.031 4.078-3.554 5.437l-7.454-7.812c-.167-.336-.503-.512-.843-.68-.34-.168-.676-.168-1.02-.168l-14.726-.172c-.68 0-1.188.34-1.696.852-.511.507-.847 1.02-.847 1.699 0 .676.336 1.355.847 1.863.508.512 1.016.68 1.696.68l13.543.172 6.437 6.965c-4.574 2.886-12.195 4.242-22.86 3.902-.847 0-1.355.176-1.863.68-.511.507-.847 1.02-.847 1.87 0 .676.168 1.188.676 1.7.507.508 1.02.848 1.863.848 12.531.511 21.336-1.188 26.586-5.098l5.926 6.285c.507.512 1.015.676 1.863.676.68 0 1.351-.164 1.863-.676.508-.512.676-1.02.676-1.7 0-.847-.168-1.359-.676-1.862l-5.758-6.29c2.2-1.867 3.895-4.414 4.91-7.472h.168c.848-2.887 1.356-5.942 1.864-9.336v-.68c0-.68 0-1.187.168-1.699V101.382c0-.679-.168-1.187-.676-1.695-.508-.511-1.184-.851-1.86-.851h-32.003v-9.34h29.125c.672 0 1.351-.168 1.859-.68.508-.511.676-1.187.676-1.867 0-.68-.168-1.191-.676-1.699ZM168.996 141.121c0-.684-.168-1.191-.676-1.7-.507-.507-1.187-.847-1.863-.847h-25.398c-3.899 0-6.778-.683-8.977-2.21-2.2-1.524-3.727-2.208-4.234-2.036-.676.172-2.032.848-3.895 2.035-2.031 1.188-5.586 1.871-10.496 2.211H89.578c-.844 0-1.351.34-1.86.848-.507.508-.679 1.016-.679 1.7v19.87c-.168 5.938-.844 10.012-1.86 12.563-.34.683-.34 1.36 0 2.035.169.512.676 1.023 1.352 1.363.68.172 1.356.172 1.864 0 .675-.176 1.183-.68 1.523-1.363 1.187-2.887 1.863-7.809 2.203-14.434v-17.492h18.793v31.25c0 .676.34 1.36.848 1.863.508.512 1.015.684 1.695.684.676 0 1.356-.172 1.863-.684.508-.504.676-1.187.676-1.863V143.5c4.234-.512 8.297-1.527 12.024-3.063 3.726 1.872 7.449 3.063 11.175 3.227v31.25c0 .676.336 1.36.844 1.863.508.512 1.02.684 1.695.684.676 0 1.356-.172 1.864-.684.507-.504.675-1.187.675-1.863v-31.25h19.645v15.285c0 7.98 1.016 13.59 3.215 16.64.34.513.847 1.024 1.527 1.188.676.176 1.352 0 1.86-.336.507-.511 1.015-1.015 1.187-1.699.168-.676 0-1.355-.34-1.867-1.523-2.547-2.37-7.305-2.37-13.926ZM121.922 86.95c0-.68-.168-1.192-.676-1.7-.508-.512-1.187-.852-1.863-.852H90.258c-.848 0-1.356.34-1.863.852-.508.508-.676 1.02-.676 1.7 0 .679.168 1.355.676 1.866.507.512 1.015.68 1.863.68h11.515v36.508h-9.992v-19.867c-.168-.676-.34-1.188-.847-1.696-.508-.511-1.016-.851-1.692-.851-.847 0-1.355.34-1.863.851-.508.508-.676 1.02-.676 1.696v22.418c0 .675.168 1.36.676 1.863.508.512 1.016.684 1.863.684h30.309c.68 0 1.355-.172 1.863-.684.508-.504.676-1.188.676-1.863 0-.68-.168-1.188-.676-1.7-.508-.511-1.184-.851-1.863-.851h-12.867v-13.582h14.39c.68 0 1.356-.172 1.864-.68.507-.512.68-1.187.68-1.87v-6.282c0-.68-.173-1.192-.68-1.7-.508-.507-1.184-.847-1.864-.847-.676 0-1.183.34-1.691.848-.508.507-.848 1.02-.848 1.699v3.738h-11.851V89.496h12.699c.676 0 1.355-.168 1.863-.68.508-.511.676-1.187.676-1.867Zm0 0"
    />
  </svg>
);

export default NccuIcon;
