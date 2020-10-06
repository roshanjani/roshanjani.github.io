$(function () { 
$(".editable").dblclick(
function() {
editable(this)
});
});

function editable (that) {
	console.log(that.innerHTML);
var OriginalContent = $(that).text(); 
$(that).addClass("cellEditing"); 
$(that).html("<input type='text' value='" + OriginalContent + "' />"); 
$(that).children().first().focus(); 
$(that).children().first().keypress(
function (e) { 
if (e.which == 13) { 
var newContent = $(this).val(); 
$(this).parent().text(newContent); 
$().parent().removeClass("cellEditing"); 
} 
}
); 
$(that).children().first().blur(function(){ 
$(this).parent().text(OriginalContent); 
$(this).parent().removeClass("cellEditing"); 
}); 
}

$(() => {
	$(".add-new-row").click(() => {
		console.error("CLICKED :::");
		$("#line-item").append(`<tr><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td onclick="removeTr(this)">Remove</td></tr>`);
	});
})

$(() => {
	$(".add-new-row-tax").click(() => {
		console.error("CLICKED :::");
		$("#tax-table").append(`<tr><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available<span></td><td><span class="editable" ondblclick="editable(this)">6%</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">6%</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td><span class="editable" ondblclick="editable(this)">Not Available</span></td><td onclick="removeTr(this)">Remove</td></tr>`);
	});
})


function removeTr(that) {
	$(that).parent().remove();
}

// BP={
	 // printInvoice = function(){
 // window.print("myTable");
 // console.log("from print");
 
 // printContent  = $("<div/>").append($("<div/>").append($("#printPage").clone())).html();
		// var printContent1 = $("<div/>").append($("<div/>").append($("#printPage1").clone())).html();
		// var printContent2 = $("<div/>").append($("<div/>").append($("#printPage2").clone())).html();
	
		// var printWindow = window.open('', '', 'scrollbars=1,height=400,width=800');
	    // window.scrollTo(500, 500);	    
	    // printWindow.document.write('<html><head>');
	    // printWindow.document.write('</head><body style="font-style: normal; font-family: sans-serif;size: 21cm 29.7cm;">');
		// printWindow.document.write(printContent);
		// printWindow.document.write(printContent1);
		// printWindow.document.write(printContent2);
	    // printWindow.document.write('</body></html>');
	    // printWindow.document.close();
	    // printWindow.print();
// }

function onPrintForBilling(id){
	
	console.log("from print")
	$('#buttonId').hide();
	window.print(id);
	$('#id').show();
	// printContent  = $("<div/>").append($("<div/>").append($("#id").clone())).html();
	// var printWindow = window.open('', '', 'scrollbars=1,height=400,width=800');
	// window.scrollTo(500, 500);
	// printWindow.document.write('<html><head>');
	    // printWindow.document.write('</head><body style="font-style: normal; font-family: sans-serif;size: 21cm 29.7cm;">');
		// printWindow.document.write(printContent);
		// // printWindow.document.write(printContent1);
		// // printWindow.document.write(printContent2);
	    // printWindow.document.write('</body></html>');
	    // printWindow.document.close();
	    // printWindow.print();
}

