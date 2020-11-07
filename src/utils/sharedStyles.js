export const centerFlexRow = `
    display: flex;
    align-items: center;
`
;

export const centerFlexRowBox = `
    ${centerFlexRow};
    justify-content: center;
`
;

export const centerFlexColumn = `
    ${centerFlexRow};
    flex-direction: column;
`
;

export const centerFlexColumnBox = `
    ${centerFlexColumn};
    justify-content: center;
`
;

export const leadingText = `
  font-size: 1.8em;
  line-height: 1.8em;
  font-weight: 600;
`
;

export const text = `
    font-size: 1.4em;
    line-height: 1.4em;
    font-weight: 600;
`
;

export const centerImage = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
;
