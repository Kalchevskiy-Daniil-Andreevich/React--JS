export default function Main({ activeNote, onUpdateNote }) {
     const onEditField = (key, value) => {
          onUpdateNote({
               ...activeNote,
               [key]: value,
               lastModified: Date.now(),
          });
     };

     if (!activeNote) {
          return <div className='no-active-note'>Заметка не выбрана</div>;
     }
     return (
          <div className='app-main'>
               <div className='app-main-note-edit'>
                    <input
                         type='text'
                         id='title'
                         value={activeNote.title}
                         autoFocus
                         onChange={(e) => {
                              onEditField("title", e.target.value);
                         }}
                    />
                    <textarea
                         id='body'
                         placeholder='Введите свою заметку здесь...'
                         value={activeNote.body}
                         onChange={(e) => {
                              onEditField("body", e.target.value);
                         }}
                    />
               </div>
               <div className='app-main-note-preview'>
                    <h1 className='preview-title'>{activeNote.title}</h1>
                    <div className='markdown-preview'>{activeNote.body}</div>
               </div>
          </div>
     );
}
