import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            className={classNames('', {
              'is-active': activeTabId === tab.id,
            })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (activeTabId !== tab.id) {
                  onTabSelected(tab.content, tab.title, tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
