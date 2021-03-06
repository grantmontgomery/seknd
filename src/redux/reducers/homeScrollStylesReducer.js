const homeScrollStylesReducer = (
  state = {
    desktop: {
      nav: {},
      backgroundDiv: {
        width: 150,
        height: 200,
        left: -100,
        top: -75,
        borderRadius: 100,
      },
      socialMedia: { render: false },
      scrollPosition: {
        render: false,
        dots: {
          search: { background: "transparent" },
          select: { background: "transparent" },
          schedule: { background: "transparent" },
        },
      },
      displayWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto auto",
        gridTemplateAreas: `"slogan devices" "works works"`,
      },
      getStarted: { render: false, pointerRender: false },
      pointer: { render: false },
      header: { render: true },
      search: { render: false },
      searchText: { opacity: "0", transform: `translateX()` },
      searchBox: { opacity: "0" },
      select: { render: false },
      selectText: { opacity: "0", transform: null },
      selectParts: {
        partOne: { transform: `translateY()`, opacity: "0" },
        partTwo: { transform: `translateY()`, opacity: "0" },
      },
      schedule: { render: false },
      scheduleText: { opacity: "0", transform: `translateX()` },
      scheduleParts: {
        grid: { opacity: "0", transform: `translateX()` },
        piece: { opacity: "0", transform: `translateX()` },
      },
      intro: { opacity: "1.0", transform: "translateX(0)" },
      devices: {
        opacity: "1.0",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      works: { render: true },
    },
    mobile: {
      nav: {},
      backgroundDiv: {
        width: 150,
        height: 200,
        left: -100,
        top: -75,
        borderRadius: 100,
      },
      socialMedia: { render: false },
      scrollPosition: {
        render: false,
        dots: {
          search: { background: "transparent" },
          select: { background: "transparent" },
          schedule: { background: "transparent" },
        },
      },
      displayWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto auto",
        gridTemplateAreas: `"slogan devices" "works works"`,
      },
      getStarted: { render: false, pointerRender: false },
      pointer: { render: false },
      header: { render: true },
      search: { render: false },
      searchText: { opacity: "0", transform: `translateX()` },
      searchBox: { opacity: "0" },
      select: { render: false },
      selectText: { opacity: "0", transform: null },
      selectParts: {
        partOne: { transform: `translateY()`, opacity: "0" },
        partTwo: { transform: `translateY()`, opacity: "0" },
      },
      schedule: { render: false },
      scheduleText: { opacity: "0", transform: `translateX()` },
      scheduleParts: {
        grid: { opacity: "0", transform: `translateX()` },
        piece: { opacity: "0", transform: `translateX()` },
      },
      intro: { opacity: "1.0", transform: "translateX(0)" },
      devices: {
        opacity: "1.0",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      works: { render: true },
    },
  },
  action
) => {
  switch (action.type) {
    case "BACKGROUND_ACTION_START":
      // return {
      //   ...state,
      //   backgroundDiv: {
      //     width: 150,
      //     height: 200,
      //     left: -100,
      //     top: -75,
      //     borderRadius: 100,
      //   },
      // };
      return {
        desktop: {
          ...state.desktop,
          backgroundDiv: {
            width: 150,
            height: 200,
            left: -100,
            top: -75,
            borderRadius: 100,
          },
        },
        mobile: {
          ...state.mobile,
          backgroundDiv: {
            width: 150,
            height: 200,
            left: -100,
            top: -75,
            borderRadius: 100,
          },
        },
      };
    case "BACKGROUND_SCROLL":
      const { width, height, left, top, borderRadius } = action.payload;
      return {
        ...state,
        backgroundDiv: {
          width,
          height,
          left,
          top,
          borderRadius,
        },
      };
    case "BACKGROUND_ACTION_END":
      return {
        ...state,
        backgroundDiv: {
          width: 50,
          height: 75,
          left: 25,
          right: 25,
          top: 50,
          borderRadius: 0,
        },
      };
    case "DISPLAYWRAPPER_CHANGE":
      return {
        ...state,
        displayWrapper: {
          ...action.payload,
        },
      };
    case "DISPLAYWRAPPER_DEFAULT":
      return {
        ...state,
        displayWrapper: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gridTemplateAreas: `"slogan devices" "works works"`,
        },
      };
    case "HEADER_ENTER":
      return { ...state, header: { render: true } };
    case "HEADER_EXIT":
      return { ...state, header: { render: false } };
    case "DEVICES_SCROLL":
      return {
        ...state,
        devices: {
          ...action.payload,
        },
      };
    case "INTRO_SCROLL":
      return {
        ...state,
        intro: {
          ...action.payload,
        },
      };
    case "SEARCHWRAPPER_ENTER":
      return { ...state, search: { render: true } };
    case "SEARCHTEXT_SCROLL":
      return {
        ...state,
        searchText: {
          ...action.payload,
        },
      };
    case "SEARCHBOX_SCROLL":
      return {
        ...state,
        searchBox: {
          ...action.payload,
        },
      };
    case "SEARCHWRAPPER_EXIT":
      return { ...state, search: { render: false } };
    case "SELECT_ENTER":
      return { ...state, select: { render: true } };
    case "SELECT_PARTS_SCROLL":
      // const { partOne, partTwo } = action.payload;
      return {
        ...state,
        selectParts: {
          // partOne: { opacity: partOne.opacity },
          // partTwo: { opacity: partTwo.opacity },
          ...action.payload,
        },
      };
    case "SELECT_TEXT_ENTER":
      return {
        ...state,
        selectText: {
          ...action.payload,
        },
      };
    case "SELECT_EXIT":
      return { ...state, select: { render: false } };
    case "SCHEDULE_TEXT_SCROLL":
      return {
        ...state,
        scheduleText: {
          ...action.payload,
        },
      };

    case "SCHEDULE_ENTER":
      return { ...state, schedule: { render: true } };
    case "SCHEDULE_PARTS_SCROLL":
      return {
        ...state,
        scheduleParts: {
          ...action.payload,
        },
      };
    case "SCHEDULE_EXIT":
      return { ...state, schedule: { render: false } };
    case "SCROLL_POSITION_ENTER":
      return {
        ...state,
        scrollPosition: {
          render: true,
          dots: {
            search: { background: "transparent" },
            select: { background: "transparent" },
            schedule: { background: "transparent" },
          },
        },
      };
    case "SCROLL_POSITION_EXIT":
      return {
        ...state,
        scrollPosition: {
          render: false,
          dots: {
            search: { background: "transparent" },
            select: { background: "transparent" },
            schedule: { background: "transparent" },
          },
        },
      };
    case "SCROLL_POSITION_SEARCH":
      return {
        ...state,
        scrollPosition: {
          render: true,
          dots: {
            search: { background: "rgb(150, 150, 150)" },
            select: { background: "transparent" },
            schedule: { background: "transparent" },
          },
        },
      };
    case "SCROLL_POSITION_SELECT":
      return {
        ...state,
        scrollPosition: {
          render: true,
          dots: {
            search: { background: "transparent" },
            select: { background: "rgb(150, 150, 150)" },
            schedule: { background: "transparent" },
          },
        },
      };
    case "SCROLL_POSITION_SCHEDULE":
      return {
        ...state,
        scrollPosition: {
          render: true,
          dots: {
            search: { background: "transparent" },
            select: { background: "transparent" },
            schedule: { background: "rgb(150, 150, 150)" },
          },
        },
      };
    case "SOCIAL_MEDIA_ENTER":
      return { ...state, socialMedia: { render: true } };
    case "SOCIAL_MEDIA_EXIT":
      return { ...state, socialMedia: { render: false } };
    case "WORKS_ENTER":
      return { ...state, works: { render: true } };
    case "WORKS_EXIT":
      return { ...state, works: { render: false } };
    case "GET_STARTED_ENTER":
      return {
        ...state,
        getStarted: { render: true, pointerRender: true },
      };
    case "GET_STARTED_EXIT":
      return {
        ...state,
        getStarted: { render: false, pointerRender: true },
      };
    case "HOME_LEAVE":
      return {
        ...state,
        getStarted: { render: false, pointerRender: false },
      };
    case "POINTER_EXIT":
      return {
        ...state,
        pointer: {
          render: false,
        },
      };
    case "POINTER_ENTER":
      return {
        ...state,
        pointer: {
          render: true,
          styles: { ...action.payload },
        },
      };

    default:
      return state;
  }
};

export default homeScrollStylesReducer;
