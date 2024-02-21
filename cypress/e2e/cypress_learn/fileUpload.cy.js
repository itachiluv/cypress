import 'cypress-file-upload'

describe('File Uploads', (() => {
    
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    //Single File Upload 
    it('Single file Upload', (() => {
        cy.get('#file-upload').attachFile('Edge_DAR.docx')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    }))

    // Rename the File
    it('File Upload - Rename', (() => {
        cy.get('#file-upload').attachFile({filePath:'Edge_DAR.docx',fileName:'myfile.docx'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    }))

    // Drag and Drop file Upload
    it('File Upload - Drag and Drop', (() => {
        cy.get('#drag-drop-upload').attachFile('Edge_DAR.docx', { subjectType: 'drag-n-drop' })
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains('Edge_DAR.docx')
        cy.get('#file-submit').click()
    }))


    // Upload Multiple file ------ Another URL 
    it.skip('Multiple File upload', (() => {
        // cy.get('#file-upload').attachFile(['Edge_DAR.docx','Dental Action Report (7).docx'])
        // cy.get('#file-submit').click()
        // cy.wait(5000)
        // cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Edge_DAR.docx', 'Dental Action Report (7).docx'])
        cy.wait(4000)
        cy.get(':nth-child(6) > strong').should('have.text', 'Files You Selected:')
        cy.get('#fileList > :nth-child(1)').should('have.text', 'Edge_DAR.docx')
    }))


    it('', (() => {
        
    }))

}))