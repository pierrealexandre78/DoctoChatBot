$(function() {
    var INDEX = 0;
    $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if(msg.trim() == ''){
            return false;
        }
        generate_message(msg, 'self');
        var buttons = [
            {
                name: 'Existing User',
                value: 'existing'
            },
            {
                name: 'New User',
                value: 'new'
            }
        ];
        setTimeout(function() {
            generate_message(msg, 'user');
        }, 1000)

    })

    function addNewlines(str) {
        var result = '';
        while (str.length > 0) {
            result += str.substring(0, 26) + '\n';
            str = str.substring(26);
        }
        return result;
    }

    function generate_message(msg, type) {
        INDEX++;
        var str="";
        str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
        str += "          <span class=\"msg-avatar\">";

        // User
        if (type == "self") {
            str += "            <img src=\"img\/avatar.png\">";
            str += "          <\/span>";
            str += "          <div class=\"cm-msg-text\">";
            str += addNewlines(msg);
        }

        // Bot
        else {
            str += "            <img src=\"img\/doctolib.png\">";
            str += "          <\/span>";
            str += "          <div class=\"cm-msg-text\">";

            response = keyword_to_response(msg);
            img_path = "img/" + response.get_pictogram();

            if (response.get_text())
                str += "<img width=60 height=60 src=\"img\/" + response.get_pictogram() + "\">" + "";
                str += addNewlines(response.get_text());

            if (response.get_link())
                str += "<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"" + addNewlines(response.get_link()) + "\">" + addNewlines(response.get_link()) + "";
        }
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-"+INDEX).hide().fadeIn(300);
        if(type == 'self'){
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    }

    $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })

    $("#chat-circle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

    $(".chat-box-toggle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

})
