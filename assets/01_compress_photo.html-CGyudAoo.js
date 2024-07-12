import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,c as o,f as i,w as e,a as s,b as n,e as t,o as u}from"./app-BvNveuPj.js";const m="/blogforstudy/software/code_desktop/01_wxPython_main.png",v="/blogforstudy/software/code_desktop/01_compress_layout.png",b={},h=s("h2",{id:"序言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#序言"},[s("span",null,"序言")])],-1),_=s("p",null,"萌生出自己做一个压缩图片的小工具的起因啊，一方面是刚好我和我的朋友都打算未来，拍拍照写写博客，但是网络图片一般都要求限制大小，不然渲染以及加载会体验变差，另一方面呢是我刚好在重新刷 python 的书，刚好看到 GUI 图形编程了，就直接上手练练。现在做的差不多了，来写个博客，记录一下。",-1),f=s("h2",{id:"wxpython-主程序界面",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#wxpython-主程序界面"},[s("span",null,"wxPython 主程序界面")])],-1),g=s("p",null,"GUI 图形编程有很多成熟的库，书上介绍的 wxPython，所以我也就用的这个，当然，最后还是查了官方文档，书毕竟还是介绍的有限。代码我这里就不具体细讲了，我就挑些有意思的地方，有需要看看书《Python 从入门到精通》，b 站看看视频，或者直接去看官方文档也可以。",-1),x=s("p",null,"这个小工具的主界面呢，我用了类似前端弹性布局的 BoxSizer，他同样也有栅格布局，但是讲真的，用起来我觉得比前端的差了好大一截。我们看下方的代码，虽然我们可以用 flag 属性去控制目标左端对齐、居中对齐等，但是如果不仔细计算总的长宽、border 大小、目标的大小，最后还是达不到我们想要的样子，所以基本上，这个布局呢，相当于也是写死了的。另外，我们先用 layout_row1 容器填充的第一行，再用 layout_row2 填充第二行，再用 layout_root 把前两个容器竖着填充进去，才写成栅格的样式，如果用 flex，直接一次就写完了，所以习惯写前端的人，肯定用这个会疯狂吐槽。",-1),k=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"import wx")]),n(`
`),s("span",{class:"line"},[s("span",null,"import CompressPhotos as CP")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class RootFrame(wx.Frame):")]),n(`
`),s("span",{class:"line"},[s("span",null,"    def __init__(self, parent, id):")]),n(`
`),s("span",{class:"line"},[s("span",null,"        wx.Frame.__init__(self, parent, id, 'AOSAI的实用工具集', size=(800, 600))")]),n(`
`),s("span",{class:"line"},[s("span",null,"        panel = wx.Panel(self)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_compress_pictures = wx.Button(")]),n(`
`),s("span",{class:"line"},[s("span",null,"            panel, label='批量压缩图片', size=(340, 240))")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_compress_pictures.Bind(wx.EVT_BUTTON, self.CompressPictures)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_undefine1 = wx.Button(panel, label='等待开发', size=(340, 240))")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_undefine2 = wx.Button(panel, label='等待开发', size=(340, 240))")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_undefine3 = wx.Button(panel, label='等待开发', size=(340, 240))")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        font = wx.Font(24, wx.DEFAULT, wx.FONTSTYLE_NORMAL, wx.NORMAL)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_compress_pictures.SetFont(font)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_undefine1.SetFont(font)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_undefine2.SetFont(font)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_undefine3.SetFont(font)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_row1 = wx.BoxSizer(wx.HORIZONTAL)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_row1.Add(self.bt_compress_pictures, proportion=0,")]),n(`
`),s("span",{class:"line"},[s("span",null,"                        flag=wx.ALIGN_CENTER | wx.LEFT | wx.RIGHT, border=40)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_row1.Add(self.bt_undefine1, proportion=0,")]),n(`
`),s("span",{class:"line"},[s("span",null,"                        flag=wx.ALIGN_CENTER | wx.RIGHT, border=40)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_row2 = wx.BoxSizer(wx.HORIZONTAL)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_row2.Add(self.bt_undefine2, proportion=0,")]),n(`
`),s("span",{class:"line"},[s("span",null,"                        flag=wx.ALIGN_CENTER | wx.LEFT | wx.RIGHT, border=40)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_row2.Add(self.bt_undefine3, proportion=0,")]),n(`
`),s("span",{class:"line"},[s("span",null,"                        flag=wx.ALIGN_CENTER | wx.RIGHT, border=40)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_root = wx.BoxSizer(wx.VERTICAL)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_root.Add(layout_row1, proportion=0,")]),n(`
`),s("span",{class:"line"},[s("span",null,"                        flag=wx.ALIGN_CENTER | wx.TOP | wx.BOTTOM, border=30)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        layout_root.Add(layout_row2, proportion=0,")]),n(`
`),s("span",{class:"line"},[s("span",null,"                        flag=wx.ALIGN_CENTER | wx.BOTTOM, border=30)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        panel.SetSizer(layout_root)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    def CompressPictures(self, event):")]),n(`
`),s("span",{class:"line"},[s("span",null,"        app_compress = wx.App()")]),n(`
`),s("span",{class:"line"},[s("span",null,"        frame_compress = CP.CompressFrame(parent=None, id=-1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        frame_compress.Show()")]),n(`
`),s("span",{class:"line"},[s("span",null,"        app_compress.MainLoop()")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"if __name__ == '__main__':")]),n(`
`),s("span",{class:"line"},[s("span",null,"    app = wx.App()")]),n(`
`),s("span",{class:"line"},[s("span",null,"    frame = RootFrame(parent=None, id=-1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    frame.Show()")]),n(`
`),s("span",{class:"line"},[s("span",null,"    app.MainLoop()")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=s("figure",null,[s("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),y=t('<p>这个小工具箱之后肯定是会继续扩展的，所以我选择了模块化的方式，将其分割成了多个 Python 文件进行书写，我看到官方文档中其实是有子程序的写法的，但是真的很丑，不是我喜欢的风格，放弃了。</p><h2 id="wxpython-压缩程序界面" tabindex="-1"><a class="header-anchor" href="#wxpython-压缩程序界面"><span>wxPython 压缩程序界面</span></a></h2><p>这个压缩小程序我想用户可以做的事是：</p><ul><li>指定压缩的目标值（多少 KB），一般网络图片都会控制在 200KB 之内</li><li>指定文件的输出路径（可选）‘</li><li>通过文件管理器选择需要压缩的图片</li><li>选择压缩方式（后加的，因为 Pillow 压缩不了 PNG 格式图片）</li></ul><p>因为是在练手，加上这个布局的特殊性，这次我选择了通过 pos，元素的左上角位于哪个像素点，再加上 size，元素的大小，将布局写死，固定为这个形式。</p><p>按钮的事件响应呢，需要先绑定响应事件的函数。通过 self.按钮的变量名称.Bind(wx.EVT_BUTTON, self.函数名称)这样一种形式进行绑定。</p>',6),P=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"import wx")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class CompressFrame(wx.Frame):")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    photo_list = ()")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    def __init__(self, parent, id):")]),n(`
`),s("span",{class:"line"},[s("span",null,"        wx.Frame.__init__(self, parent, id, '批量图片压缩工具', size=(500, 600))")]),n(`
`),s("span",{class:"line"},[s("span",null,"        panel = wx.Panel(self)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.label_expect_size = wx.StaticText(")]),n(`
`),s("span",{class:"line"},[s("span",null,'            panel, label="1.预期压缩后的图片为多少KB：请输入罗马数字,\\n常见单位转换：1MB=1024KB，2MB=2048KB", pos=(60, 60), size=(370, 40))')]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.text_expect_size = wx.TextCtrl(")]),n(`
`),s("span",{class:"line"},[s("span",null,"            panel, style=wx.TE_LEFT, pos=(60, 105), size=(370, 30))")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.label_expect_filePath = wx.StaticText(")]),n(`
`),s("span",{class:"line"},[s("span",null,'            panel, label="2.预期存放的文件夹路径：如果未指定路径，默认会在第一张照片\\n的路径中，创建新的文件夹CompressedPhotos。例：D:\\Blog", pos=(60, 155), size=(370, 40))')]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.text_expect_filePath = wx.TextCtrl(")]),n(`
`),s("span",{class:"line"},[s("span",null,"            panel, style=wx.TE_LEFT, pos=(60, 200), size=(370, 30))")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'        methods_list = ["OpenCV", "Pillow"]')]),n(`
`),s("span",{class:"line"},[s("span",null,'        self.method_choose_rbox = wx.RadioBox(panel, label="3.请选择压缩方式：JPG/JPEG(Pillow),PNG(OpenCV)", pos=(')]),n(`
`),s("span",{class:"line"},[s("span",null,"            60, 240), choices=methods_list, majorDimension=1, style=wx.RA_SPECIFY_ROWS)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.label_select_photos = wx.StaticText(")]),n(`
`),s("span",{class:"line"},[s("span",null,'            panel, label="4.请选择想压缩的图片：仅支持JPG(JPEG)、PNG格式", pos=(60, 310), size=(370, 30))')]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_select_photos = wx.Button(")]),n(`
`),s("span",{class:"line"},[s("span",null,"            panel, label='选择图片', pos=(60, 340), size=(370, 30))")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_select_photos.Bind(wx.EVT_BUTTON, self.SelectPhotos)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_start_compress = wx.Button(")]),n(`
`),s("span",{class:"line"},[s("span",null,'            panel, label="开始压缩", pos=(100, 440), size=(120, 40))')]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_start_compress.Bind(wx.EVT_BUTTON, self.StartCompress)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_reset = wx.Button(")]),n(`
`),s("span",{class:"line"},[s("span",null,'            panel, label="清空重置", pos=(260, 440), size=(120, 40))')]),n(`
`),s("span",{class:"line"},[s("span",null,"        self.bt_reset.Bind(wx.EVT_BUTTON, self.ResetData)")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    def StartCompress(self, event):")]),n(`
`),s("span",{class:"line"},[s("span",null,"        pass")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    def ResetData(self, event):")]),n(`
`),s("span",{class:"line"},[s("span",null,"        pass")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    def SelectPhotos(self, event):")]),n(`
`),s("span",{class:"line"},[s("span",null,"        pass")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),z=s("figure",null,[s("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),T=t(`<h2 id="按钮事件响应函数的实现" tabindex="-1"><a class="header-anchor" href="#按钮事件响应函数的实现"><span>按钮事件响应函数的实现</span></a></h2><p>在实现事件响应前，得先理清我们需要做什么。</p><p>清空重置：最简单，将上方 TextCtrl 里的字符串都清空，把单选框回归到第一个选项。</p><p>选择图片：对于程序员而言，写文件路径，进行图片压缩是没问题的，但是对于用户而言，当然还是通过图形界面的文件选择器来选择图片合适，所以首先就是要实现文件选择器的功能。其次，我们要将取得的图片文件的路径保存到一个序列里面，对其进行格式的筛选判断，如果有非 JPG、PNG 格式的照片，需要提醒用户重新进行选择。</p><p>开始压缩：这个函数内的判断最多。首先因为文件输出路径是可选的，我们要对输出文件路径进行判断，得出一个正确的输出路径。其次，要判断用户输入的目标文件大小是否正确，是否是数值类型，因为输入框得到的数据都是字符串 str，我们还需要将其类型转换变成 int 类型。第三，我们要判断需要压缩的图像，是否已经读取到，是否用户已经成功选择了图像。第四，才是开始压缩这个步骤。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import tkinter as tk</span></span>
<span class="line"><span>from tkinter import filedialog</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CompressFrame(wx.Frame):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    photo_list = ()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def StartCompress(self, event):</span></span>
<span class="line"><span>        expect_folder = &quot;&quot;</span></span>
<span class="line"><span>        expect_size = 200</span></span>
<span class="line"><span>        size = self.text_expect_size.GetValue()</span></span>
<span class="line"><span>        if size != &quot;&quot; and re.search(&#39;[^\\d]&#39;, size) != None:</span></span>
<span class="line"><span>            wx.MessageBox(&quot;您输入的期望压缩值有误，请修改。&quot;)</span></span>
<span class="line"><span>            return 0</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            expect_size = int(size)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.photo_list == ():</span></span>
<span class="line"><span>            wx.MessageBox(&quot;您还未选择需要压缩的图片！&quot;)</span></span>
<span class="line"><span>            return 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.text_expect_filePath.GetValue() == &quot;&quot;:</span></span>
<span class="line"><span>            base_path = os.path.dirname(self.photo_list[0])</span></span>
<span class="line"><span>            expect_folder = base_path + &quot;/CompressedPhotos&quot;</span></span>
<span class="line"><span>            if not os.path.exists(expect_folder):</span></span>
<span class="line"><span>                os.mkdir(expect_folder)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            path = self.text_expect_filePath.GetValue()</span></span>
<span class="line"><span>            if os.path.isdir(path):</span></span>
<span class="line"><span>                expect_folder = path</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                wx.MessageBox(&quot;您输入的目标文件夹路径有误！\\n请重新修正！&quot;)</span></span>
<span class="line"><span>                return 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def ResetData(self, event):</span></span>
<span class="line"><span>        self.text_expect_size.Clear()</span></span>
<span class="line"><span>        self.text_expect_filePath.Clear()</span></span>
<span class="line"><span>        self.method_choose_rbox.SetStringSelection(&quot;OpenCV&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def SelectPhotos(self, event):</span></span>
<span class="line"><span>        select = tk.Tk()</span></span>
<span class="line"><span>        select.withdraw()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # folder_path = filedialog.askdirectory()   # 选择文件夹</span></span>
<span class="line"><span>        file_path = filedialog.askopenfilenames()   # 选择多个文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for index, item in enumerate(file_path):</span></span>
<span class="line"><span>            if not item.endswith(&quot;.jpg&quot;) and not item.endswith(&quot;.jpeg&quot;) and not item.endswith(&quot;.png&quot;):</span></span>
<span class="line"><span>                wx.MessageBox(&quot;您选择的图片存在格式错误的情况！\\n请重新选择！&quot;)</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>            if index == (len(file_path) - 1):</span></span>
<span class="line"><span>                self.photo_list = file_path</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="压缩图像的实现-pillow、opencv" tabindex="-1"><a class="header-anchor" href="#压缩图像的实现-pillow、opencv"><span>压缩图像的实现（Pillow、OpenCV）</span></a></h2><p>图片压缩的原理，简单来说就是，我们把一张图片提取成矩阵形式，经过算法进行一系列的矩阵运算后，可以出现很多个零，这个零越多，就意味着可以压缩的比例越大。</p><p>JPG、JPEG 这个格式的图片呢，最常用于网络传输，但它在不改变图像尺寸，也就是分辨率的情况下，如果压过头，就会失真很严重，它是有损压缩。</p><p>PNG 这个格式的图片是无损压缩，他是可逆的。也就意味着一般情况下，PNG 格式的照片会比 JPG 的要大。</p><p>我们将压缩图像的功能，封装到一个函数中，批量压缩的实现呢，循环调用这个函数即可。</p><p>Pillow 的压缩代码很简单，先用 PIL 模块中的 Image 方法打开图片，再用 save 保存的时候，选择保存的质量 quality 即可。一般要求 quality 不能大于 95，不然压缩可能无效。</p><p>OpenCV 的压缩代码基本和 Pillow 类似，但是存在一个问题，OpenCV 原本是不支持中文路径的，可能只能支持英文路径，而我们日常使用大概率都会有中文，不管是文件夹名称，还是图片名称，所以我们要进行一个可以读取中文路径的修正。</p>`,13),C=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"def _CompressByPillow(self, input, output, expect_size, quality1=95):")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 将原图的单位转化成KB  Bytes/1024=KB")]),n(`
`),s("span",{class:"line"},[s("span",null,"    photo_size = os.path.getsize(input) / 1024")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    while photo_size > expect_size:")]),n(`
`),s("span",{class:"line"},[s("span",null,"        img = Image.open(input)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        img.save(output, quality=quality1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if quality1 <= 0:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            break")]),n(`
`),s("span",{class:"line"},[s("span",null,"        quality1 -= 5")]),n(`
`),s("span",{class:"line"},[s("span",null,"        # 将压缩后的图片单位转化为KB，同时赋值给photo_size，进行循环判断")]),n(`
`),s("span",{class:"line"},[s("span",null,"        photo_size = os.path.getsize(output) / 1024")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"def _CompressByOpenCV(self, input, output, expect_size, ratio=1):")]),n(`
`),s("span",{class:"line"},[s("span",null,"        photo_size = os.path.getsize(input) / 1024")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        while photo_size > expect_size:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            img = cv2.imread(input, 1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"            cv2.imwrite(output, img, [cv2.IMWRITE_PNG_COMPRESSION, ratio])")]),n(`
`),s("span",{class:"line"},[s("span",null,"            if ratio >= 9:")]),n(`
`),s("span",{class:"line"},[s("span",null,"                break")]),n(`
`),s("span",{class:"line"},[s("span",null,"            ratio += 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"            photo_size = os.path.getsize(output) / 1024")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),B=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"def _CompressByOpenCV(self, input, output, expect_size, ratio=1):")]),n(`
`),s("span",{class:"line"},[s("span",null,"    photo_size = os.path.getsize(input) / 1024")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    while photo_size > expect_size:")]),n(`
`),s("span",{class:"line"},[s("span",null,"        img = cv2.imdecode(np.fromfile(input, dtype=np.uint8), 1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        params = [cv2.IMWRITE_PNG_COMPRESSION, ratio]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        cv2.imencode('.png', img, params)[1].tofile(output)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if ratio >= 9:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            break")]),n(`
`),s("span",{class:"line"},[s("span",null,"        ratio += 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"        photo_size = os.path.getsize(output) / 1024")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"def StartCompress(self, event):")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # 验证等省略，见上一个代码块")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    method_name = self.method_choose_rbox.GetStringSelection()")]),n(`
`),s("span",{class:"line"},[s("span",null,'        if method_name == "Pillow":')]),n(`
`),s("span",{class:"line"},[s("span",null,"            for index, item in enumerate(self.photo_list):")]),n(`
`),s("span",{class:"line"},[s("span",null,'                new_photo = expect_folder + "/" + str(index) + ".jpeg"')]),n(`
`),s("span",{class:"line"},[s("span",null,"                self._CompressByPillow(item, new_photo, expect_size)")]),n(`
`),s("span",{class:"line"},[s("span",null,"            os.startfile(expect_folder)")]),n(`
`),s("span",{class:"line"},[s("span",null,"            self.ResetData(wx.EVT_BUTTON)")]),n(`
`),s("span",{class:"line"},[s("span",null,'        if method_name == "OpenCV":')]),n(`
`),s("span",{class:"line"},[s("span",null,"            for index, item in enumerate(self.photo_list):")]),n(`
`),s("span",{class:"line"},[s("span",null,'                new_photo = expect_folder + "/" + str(index) + ".png"')]),n(`
`),s("span",{class:"line"},[s("span",null,"                self._CompressByOpenCV(item, new_photo, expect_size)")]),n(`
`),s("span",{class:"line"},[s("span",null,"            os.startfile(expect_folder)")]),n(`
`),s("span",{class:"line"},[s("span",null,"            self.ResetData(wx.EVT_BUTTON)")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),G=s("h2",{id:"二分法优化压缩步骤",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#二分法优化压缩步骤"},[s("span",null,"二分法优化压缩步骤")])],-1),N=s("p",null,"我在已有的博客中，借鉴了循环压缩的方法：从高质量不断递减。如果是 PNG 倒还好，压缩比率只是 0-9，最多也就 9 次，但是 JPG 从 95 每次减 5，最极端情况递减到 0，这可就是 20 次，一张图片 20 次循环，100 张图片，那个处理效率就会爆炸，因此，打算通过二分法寻找最优解。",-1),S=s("p",null,"我们给定一个左边界 left，一个右边界 right，中间值 mid=(left+right)/2。如果在中间值 mid 的压缩质量下，输出图片大小高于目标大小，我们让右边界 right=mid，如果在中间值 mid 的压缩质量下，输出图片大小小于目标大小，我们就让左边界值 left=mid，然后再循环进行比较。终止条件就是 rigth - left <= 2。",-1),E=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"def _CompressByPillow(self, input, output, expect_size):")]),n(`
`),s("span",{class:"line"},[s("span",null,"    photo_size = os.path.getsize(input) / 1024")]),n(`
`),s("span",{class:"line"},[s("span",null,"    left = 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"    right = 100")]),n(`
`),s("span",{class:"line"},[s("span",null,"    while True:")]),n(`
`),s("span",{class:"line"},[s("span",null,"        mid = int((left+right)/2)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        img = Image.open(input)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        img.save(output, quality=mid)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        photo_size = os.path.getsize(output) / 1024")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if right - left <= 1:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            break")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if photo_size >= expect_size:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            right = mid")]),n(`
`),s("span",{class:"line"},[s("span",null,"        else:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            left = mid")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),I=s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"def _CompressByOpenCV(self, input, output, expect_size):")]),n(`
`),s("span",{class:"line"},[s("span",null,"    photo_size = os.path.getsize(input) / 1024")]),n(`
`),s("span",{class:"line"},[s("span",null,"    left = 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"    right = 9")]),n(`
`),s("span",{class:"line"},[s("span",null,"    while True:")]),n(`
`),s("span",{class:"line"},[s("span",null,"        mid = int((left+right)/2)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        img = cv2.imdecode(np.fromfile(input, dtype=np.uint8), -1)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        params = [cv2.IMWRITE_PNG_COMPRESSION, mid]")]),n(`
`),s("span",{class:"line"},[s("span",null,"        cv2.imencode('.png', img, params)[1].tofile(output)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        photo_size = os.path.getsize(output) / 1024")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if right - left <= 1:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            break")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if photo_size >= expect_size:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            left = mid")]),n(`
`),s("span",{class:"line"},[s("span",null,"        else:")]),n(`
`),s("span",{class:"line"},[s("span",null,"            right = mid")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),q=t(`<h2 id="增加压缩过程进度条" tabindex="-1"><a class="header-anchor" href="#增加压缩过程进度条"><span>增加压缩过程进度条</span></a></h2><p>图片如果太多，压缩是要一定过程的，如果没有进度条，用户不知道到底多久才能完成，就会造成体验降低的结果。因此我们添加一下这个功能。</p><p>这里用到了 tkinter 模块的 geometry 方法，它可以生成一个大小为自定义的显示框。然后使用 tkinter.ttk 模块，向其中添加进度条。进度条的变动，是需要和压缩的循环体结构挂钩的，每压缩一个，进度增加一个。此处代码仅拿 JPG 循环体举例，PNG 是一样的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import tkinter as tk</span></span>
<span class="line"><span>from tkinter import ttk</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root = tk.Tk()</span></span>
<span class="line"><span>    root.geometry(&#39;500x100&#39;)</span></span>
<span class="line"><span>    progress = ttk.Progressbar(root)</span></span>
<span class="line"><span>    progress.pack(pady=20)</span></span>
<span class="line"><span>    progress[&#39;length&#39;] = 400</span></span>
<span class="line"><span>    progress[&#39;maximum&#39;] = len(self.photo_list)</span></span>
<span class="line"><span>    progress[&#39;value&#39;] = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    method_name = self.method_choose_rbox.GetStringSelection()</span></span>
<span class="line"><span>    if method_name == &quot;JPG/JPEG&quot;:</span></span>
<span class="line"><span>        for index, item in enumerate(self.photo_list):</span></span>
<span class="line"><span>            new_photo = expect_folder + &quot;/&quot; + str(index) + &quot;.jpeg&quot;</span></span>
<span class="line"><span>            self._CompressByPillow(item, new_photo, expect_size)</span></span>
<span class="line"><span>            progress[&#39;value&#39;] += 1</span></span>
<span class="line"><span>            root.update()</span></span>
<span class="line"><span>            time.sleep(0.05)</span></span>
<span class="line"><span>        root.destroy()</span></span>
<span class="line"><span>        os.startfile(expect_folder)</span></span>
<span class="line"><span>        self.ResetData(wx.EVT_BUTTON)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包成-exe-文件" tabindex="-1"><a class="header-anchor" href="#打包成-exe-文件"><span>打包成 exe 文件</span></a></h2><p>Python 文件打包常见的有 Pyinstaller 和 Nuitka，这里我们选择使用前者。</p><p>首先先配置一个虚拟环境，Python 文件的打包啊，他会扫描当前环境下的所有模块，如果下载的没有用到的模块很多，或者直接使用了 Anaconda，那打包出来的文件就会非常大。如果使用 Anaconda，可以直接使用它自带的 conda 虚拟环境工具。分为四个步骤：创建环境，激活环境，下载需要的模块，开始打包。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 创建Python版本为x.x的虚拟环境</span></span>
<span class="line"><span>conda create -n folder_name python==x.x</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 激活使用</span></span>
<span class="line"><span>conda activate folder_name</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 本次虚拟环境需要安装的模块</span></span>
<span class="line"><span>pip install wxPython</span></span>
<span class="line"><span>pip install opencv-python</span></span>
<span class="line"><span>pip install numpy</span></span>
<span class="line"><span>pip install Pillow</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 先创建 .spec文件，按照自己需求修改里面内容</span></span>
<span class="line"><span>pyi-makespec -w main.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 再开始打包</span></span>
<span class="line"><span>pyinstaller main.spec</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),V=s("p",null,"完稿时间：2023 年 9 月 2 日",-1);function R(F,L){const p=c("Tabs"),r=c("RouteLink");return u(),o("div",null,[h,_,f,g,x,i(p,{id:"15",data:[{id:"main_code"},{id:"output1"}],"tab-id":"wxPython1"},{title0:e(({value:l,isActive:a})=>[n("主程序代码")]),title1:e(({value:l,isActive:a})=>[n("运行结果")]),tab0:e(({value:l,isActive:a})=>[k]),tab1:e(({value:l,isActive:a})=>[w]),_:1}),y,i(p,{id:"62",data:[{id:"compress_layout_code"},{id:"output2"}],"tab-id":"wxPython2"},{title0:e(({value:l,isActive:a})=>[n("压缩程序界面代码")]),title1:e(({value:l,isActive:a})=>[n("运行结果")]),tab0:e(({value:l,isActive:a})=>[P]),tab1:e(({value:l,isActive:a})=>[z]),_:1}),T,i(p,{id:"109",data:[{id:"Pillow 压缩 JPG/JPEG"},{id:"OpenCV 压缩 PNG 原版"},{id:"OpenCV 可读取中文路径"},{id:"循环批量调用"}]},{title0:e(({value:l,isActive:a})=>[n("Pillow 压缩 JPG/JPEG")]),title1:e(({value:l,isActive:a})=>[n("OpenCV 压缩 PNG 原版")]),title2:e(({value:l,isActive:a})=>[n("OpenCV 可读取中文路径")]),title3:e(({value:l,isActive:a})=>[n("循环批量调用")]),tab0:e(({value:l,isActive:a})=>[C]),tab1:e(({value:l,isActive:a})=>[A]),tab2:e(({value:l,isActive:a})=>[B]),tab3:e(({value:l,isActive:a})=>[O]),_:1}),G,N,S,i(p,{id:"132",data:[{id:"优化后的 Pillow"},{id:"优化后的 OpenCV"}]},{title0:e(({value:l,isActive:a})=>[n("优化后的 Pillow")]),title1:e(({value:l,isActive:a})=>[n("优化后的 OpenCV")]),tab0:e(({value:l,isActive:a})=>[E]),tab1:e(({value:l,isActive:a})=>[I]),_:1}),q,s("p",null,[n("关于打包的内容详细我还写了另一篇博文，有兴趣可以看看："),i(r,{to:"/zh/software/desktop_app/02_file_packaging.html"},{default:e(()=>[n("Python 文件打包成 Exe 文件")]),_:1})]),V])}const U=d(b,[["render",R],["__file","01_compress_photo.html.vue"]]),D=JSON.parse('{"path":"/zh/software/desktop_app/01_compress_photo.html","title":"Python桌面压缩图片小工具","lang":"zh-CN","frontmatter":{"title":"Python桌面压缩图片小工具","order":1,"author":"AOSAI","date":"2023-08-28T00:00:00.000Z","category":["软件开发","桌面程序"],"tag":["Python","wxPython","Pillow","OpenCV"],"sticky":false,"star":false,"footer":"等我攒够六便士，就去寻找月亮","copyright":"AOSAI","description":"序言 萌生出自己做一个压缩图片的小工具的起因啊，一方面是刚好我和我的朋友都打算未来，拍拍照写写博客，但是网络图片一般都要求限制大小，不然渲染以及加载会体验变差，另一方面呢是我刚好在重新刷 python 的书，刚好看到 GUI 图形编程了，就直接上手练练。现在做的差不多了，来写个博客，记录一下。 wxPython 主程序界面 GUI 图形编程有很多成熟的...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogforstudy/zh/software/desktop_app/01_compress_photo.html"}],["meta",{"property":"og:site_name","content":"青裁的博客"}],["meta",{"property":"og:title","content":"Python桌面压缩图片小工具"}],["meta",{"property":"og:description","content":"序言 萌生出自己做一个压缩图片的小工具的起因啊，一方面是刚好我和我的朋友都打算未来，拍拍照写写博客，但是网络图片一般都要求限制大小，不然渲染以及加载会体验变差，另一方面呢是我刚好在重新刷 python 的书，刚好看到 GUI 图形编程了，就直接上手练练。现在做的差不多了，来写个博客，记录一下。 wxPython 主程序界面 GUI 图形编程有很多成熟的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blogforstudy/software/code_desktop/01_wxPython_main.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-12T15:46:44.000Z"}],["meta",{"property":"article:author","content":"AOSAI"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"wxPython"}],["meta",{"property":"article:tag","content":"Pillow"}],["meta",{"property":"article:tag","content":"OpenCV"}],["meta",{"property":"article:published_time","content":"2023-08-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-12T15:46:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python桌面压缩图片小工具\\",\\"image\\":[\\"https://mister-hope.github.io/blogforstudy/software/code_desktop/01_wxPython_main.png\\",\\"https://mister-hope.github.io/blogforstudy/software/code_desktop/01_compress_layout.png\\"],\\"datePublished\\":\\"2023-08-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-12T15:46:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AOSAI\\"}]}"]]},"headers":[{"level":2,"title":"序言","slug":"序言","link":"#序言","children":[]},{"level":2,"title":"wxPython 主程序界面","slug":"wxpython-主程序界面","link":"#wxpython-主程序界面","children":[]},{"level":2,"title":"wxPython 压缩程序界面","slug":"wxpython-压缩程序界面","link":"#wxpython-压缩程序界面","children":[]},{"level":2,"title":"按钮事件响应函数的实现","slug":"按钮事件响应函数的实现","link":"#按钮事件响应函数的实现","children":[]},{"level":2,"title":"压缩图像的实现（Pillow、OpenCV）","slug":"压缩图像的实现-pillow、opencv","link":"#压缩图像的实现-pillow、opencv","children":[]},{"level":2,"title":"二分法优化压缩步骤","slug":"二分法优化压缩步骤","link":"#二分法优化压缩步骤","children":[]},{"level":2,"title":"增加压缩过程进度条","slug":"增加压缩过程进度条","link":"#增加压缩过程进度条","children":[]},{"level":2,"title":"打包成 exe 文件","slug":"打包成-exe-文件","link":"#打包成-exe-文件","children":[]}],"git":{"createdTime":1720799204000,"updatedTime":1720799204000,"contributors":[{"name":"AOSAI","email":"1213860588@qq.com","commits":1}]},"readingTime":{"minutes":11.19,"words":3356},"filePathRelative":"zh/software/desktop_app/01_compress_photo.md","localizedDate":"2023年8月28日","excerpt":"<h2>序言</h2>\\n<p>萌生出自己做一个压缩图片的小工具的起因啊，一方面是刚好我和我的朋友都打算未来，拍拍照写写博客，但是网络图片一般都要求限制大小，不然渲染以及加载会体验变差，另一方面呢是我刚好在重新刷 python 的书，刚好看到 GUI 图形编程了，就直接上手练练。现在做的差不多了，来写个博客，记录一下。</p>\\n<h2>wxPython 主程序界面</h2>\\n<p>GUI 图形编程有很多成熟的库，书上介绍的 wxPython，所以我也就用的这个，当然，最后还是查了官方文档，书毕竟还是介绍的有限。代码我这里就不具体细讲了，我就挑些有意思的地方，有需要看看书《Python 从入门到精通》，b 站看看视频，或者直接去看官方文档也可以。</p>","autoDesc":true}');export{U as comp,D as data};
