//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        var $tryit;

        var io = new extIO({
            functions: {
                js: 'commonWords',
                python: 'checkio'
            },
            tryit:function (this_e) {
                $tryit = this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')).find(".tryit-content");
                $tryit.find('.bn-check').click(function (e) {
                    e.preventDefault();
                    this_e.extSendToConsoleCheckiO($tryit.find(".text-input1").val(), $tryit.find(".text-input2").val());
                    e.stopPropagation();
                    return false;
                });

                var rWordsBase = ["hi", 'hello', 'one', "two", "three", "four", "five", "six", "seven", "eight", "nine",
                "checkio", "task"];

                $tryit.find('.bn-random').click(function (e) {
                    e.preventDefault();
                    function randWords() {
                        var rWords = rWordsBase.slice();
                        var numb = Math.floor(Math.random() * 6) + 1;
                        var res = [];
                        for (var i = 0; i < numb; i++) {
                            var rw = rWords.splice([Math.floor(Math.random() * rWords.length)], 1)[0];
                            res.push(rw);
                        }
                        return res;
                    }
                    $tryit.find(".text-input1").val(randWords().join(","));
                    $tryit.find(".text-input2").val(randWords().join(","));


                    return false;
                });

            },
            retConsole: function (ret) {
                $tryit.find(".checkio-result").html("Your Result<br>" + ret);
            }
        });
        io.start();

    }
);
