(function () {

    function detailedMessage() {
        var detailMsgHtml = '<div class="custom-detail-message"><div class="custom-image"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5229 17.5229 22 12 22C6.47715 22 2 17.5229 2 12ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12ZM12.7071 7.29289C13.0976 7.68341 13.0976 8.31658 12.7071 8.7071C12.3166 9.09762 11.6834 9.09762 11.2929 8.7071C10.9024 8.31658 10.9024 7.68341 11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289ZM11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11Z" fill="#3D2C3E"></path></svg></div><div class="custom-message">The account holder is the person who will be <span class="custom-message-bold">managing the Mable online account </span>, which may be different to the person receiving care and support.</div></div>';
        document.querySelector('.bodyContainer>div h2').insertAdjacentHTML('afterend', detailMsgHtml);
    }

    detailedMessage();

}());
