import React, { FC } from 'react';

const TableBodyNotes: FC = () => {
  return (
    <tbody>
      {/* $
      {tasks
        .map(task => {
          const { id, name, created, category, content, dates } = task;

          return `<tr>
  <td>
    <span class="icon-wrapper">
      <svg width="16" height="16">
        <use href="./images/sprite.svg#${getIcon(category)}"></use>
      </svg>
    </span>
  </td>
  <td>${cutString(name)}</td>
  <td>${created}</td>
  <td>${category}</td>
  <td>${cutString(content)}</td>
  <td>${dates?.length > 1 ? showDates(dates) : ''}</td>
  <td class="options">
    <button id="btn-edit" class="btn js-btn-edit js-open-modal" type="button" data-task=${id} data-modal="2">
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#pencil"></use>
      </svg>
    </button>
    <button id="btn-archive" class="btn js-btn-archive" type="button" data-task=${id}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#box-add"></use>
      </svg>
    </button>
    <button id="btn-delete" class="btn js-btn-delete" type="button" data-task=${id}>
      <svg class="icon" width="16" height="16">
        <use href="./images/sprite.svg#bin"></use>
      </svg>
    </button>
  </td>
</tr>`;
        })
        .join('')} */}
    </tbody>
  );
};

export default TableBodyNotes;
