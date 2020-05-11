import * as React from 'react';

type Options = {
  refKey?: string;
};

export function useHideIfNoChildren(opts: Options = {}) {
  const { refKey = 'ref' } = opts;

  const ref = React.useRef<HTMLElement>();

  React.useEffect(() => {
    const inheritedDisplay = ref.current ? ref.current.style.display : 'inherit';

    const applyStyles = () => {
      if (ref.current) {
        const children = ref.current.children || [];
        if (children.length === 0) {
          ref.current.style.display = 'none';
        } else if (ref.current.style.display === 'none') {
          ref.current.style.display = inheritedDisplay;
        }
      }
    };
    const observer = new MutationObserver(() => applyStyles());

    if (ref.current) {
      applyStyles();
      observer.observe(ref.current, { childList: true });
    }
    return function cleanup() {
      observer.disconnect();
    };
  }, []);

  return {
    [refKey]: ref,
  };
}
