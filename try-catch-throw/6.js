openMyFile()
try {
    writeMyFile(theData) // Isso pode lançar um erro
} catch (e) {
    handleError(e)
} finally {
    closeMyFile()
}