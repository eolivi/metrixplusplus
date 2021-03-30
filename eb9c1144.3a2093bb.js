(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(9),r=(n(0),n(155)),a={id:"04-u-workflow",title:"Workflow",sidebar_label:"Workflow"},c={id:"04-u-workflow",isDocsHomePage:!1,title:"Workflow",description:"The workflow and application usecases are demonstrated using source code from the boost/interprocess library. Boost versions 1.52 and 1.54 are used and refered below as the 'previous' version and the 'current' version accordingly.",source:"@site/docs/04-u-workflow.md",permalink:"/docs/04-u-workflow",editUrl:"https://metrixplusplus.github.io/docs/04-u-workflow.md",sidebar_label:"Workflow",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/docs/03-u-getting-started"},next:{title:"Extending the tool",permalink:"/docs/05-u-extending-tool"}},s=[{value:"Collect data",id:"collect-data",children:[]},{value:"View data",id:"view-data",children:[{value:"Summary metrics and distribution tables/graphs",id:"summary-metrics-and-distribution-tablesgraphs",children:[]},{value:"Reducing analysis scope",id:"reducing-analysis-scope",children:[]},{value:"Detailed metrics per file/region",id:"detailed-metrics-per-fileregion",children:[]},{value:"More about the viewer",id:"more-about-the-viewer",children:[]}]},{value:"Apply thresholds",id:"apply-thresholds",children:[{value:"Hotspots",id:"hotspots",children:[]},{value:"Controlling trends",id:"controlling-trends",children:[]}]},{value:"Other applications",id:"other-applications",children:[{value:"Checking data file properties",id:"checking-data-file-properties",children:[]},{value:"Exporting results",id:"exporting-results",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The workflow and application usecases are demonstrated using source code from the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.boost.org/doc/libs/1_54_0/doc/html/interprocess.html"}),"boost/interprocess library"),". Boost versions 1.52 and 1.54 are used and refered below as the 'previous' version and the 'current' version accordingly."),Object(r.b)("h2",{id:"collect-data"},"Collect data"),Object(r.b)("p",null,"The first step is to collect the data. The 'collect' tool has got multiple options to enable various metrics plugins. Let's collect the number of lines of code and cyclomatic complexity metrics for the previous (1.52.0 version) boost interprocess library. Assuming that 2 versions of boost library are unpacked in the current working directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> cd boost_1_52_0\n> python "/path/to/metrix++.py" collect --std.code.lines.code --std.code.complexity.cyclomatic -- boost/interprocess\n> cd ../ # return back to working directory\n')),Object(r.b)("p",null,"The list of arguments after '--' enumerates the paths to read the source files. As a result of execution of this command, a file ",Object(r.b)("strong",{parentName:"p"},"metrixpp.db")," will be written in the current working directory. It can be redefined using the ",Object(r.b)("strong",{parentName:"p"},"--db-file")," option."),Object(r.b)("p",null,"Metrix++ can compare code bases which reduces processing scope to the modified or new code. So, let's collect the same data for the current (1.54.0 version) boost interprocess library."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> cd boost_1_54_0\n> python "/path/to/metrix++.py" collect --std.code.lines.code --std.code.complexity.cyclomatic -- boost/interprocess --db-file-prev=../boost_1_52_0/metrixpp.db\n> cd ../ # return back to working directory\n')),Object(r.b)("p",null,"The option ",Object(r.b)("strong",{parentName:"p"},"--db-file-prev")," points to the file with the data collected in the previous step. So, eventually it executed iterative collection. It can speed up the exectuion significantly, depending on amount of changes between two version."),Object(r.b)("p",null,"Check other options of the collect tool by executing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" collect --help\n')),Object(r.b)("h2",{id:"view-data"},"View data"),Object(r.b)("h3",{id:"summary-metrics-and-distribution-tablesgraphs"},"Summary metrics and distribution tables/graphs"),Object(r.b)("p",null,"It is time to look at the data files collected (step above). The command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" view --db-file=boost_1_54_0/metrixpp.db\n')),Object(r.b)("p",null,"prints summary metrics, like minimum/maximum, and distribution/frequency tables:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),":: info: Overall metrics for 'std.code.complexity:cyclomatic' metric\n    Average        : 0.652902698283\n    Minimum        : 0\n    Maximum        : 37\n    Total          : 1597.0\n    Distribution   : 2446 regions in total (including 0 suppressed)\n      Metric value : Ratio : R-sum : Number of regions\n                 0 : 0.771 : 0.771 : 1886   |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n                 1 : 0.110 : 0.881 :  268   |||||||||||\n                 2 : 0.044 : 0.925 :  108   ||||\n                 3 : 0.025 : 0.949 :   60   ||\n                 4 : 0.016 : 0.966 :   40   ||\n                 5 : 0.007 : 0.973 :   18   |\n                 6 : 0.006 : 0.979 :   14   |\n                 7 : 0.004 : 0.983 :   10   \n                 8 : 0.003 : 0.986 :    8   \n                 9 : 0.002 : 0.988 :    4   \n                10 : 0.004 : 0.991 :    9   \n                11 : 0.002 : 0.993 :    4   \n                12 : 0.001 : 0.994 :    3   \n                13 : 0.001 : 0.995 :    2   \n                14 : 0.001 : 0.996 :    2   \n             15-16 : 0.001 : 0.997 :    3   \n             17-18 : 0.001 : 0.998 :    3   \n                20 : 0.000 : 0.999 :    1   \n             23-25 : 0.001 : 1.000 :    2   \n                37 : 0.000 : 1.000 :    1   \n\n:: info: Overall metrics for 'std.code.lines:code' metric\n    Average        : 6.64356984479\n    Minimum        : 0\n    Maximum        : 201\n    Total          : 23970.0\n    Distribution   : 3608 regions in total (including 0 suppressed)\n      Metric value : Ratio : R-sum : Number of regions\n               0-1 : 0.088 : 0.088 :  319   |||||||||\n                 2 : 0.320 : 0.409 : 1155   ||||||||||||||||||||||||||||||||\n                 3 : 0.108 : 0.517 :  390   |||||||||||\n                 4 : 0.081 : 0.598 :  294   ||||||||\n                 5 : 0.080 : 0.678 :  290   ||||||||\n                 6 : 0.061 : 0.739 :  220   ||||||\n                 7 : 0.049 : 0.788 :  176   |||||\n                 8 : 0.030 : 0.818 :  109   |||\n                 9 : 0.025 : 0.843 :   89   ||\n             10-11 : 0.032 : 0.876 :  117   |||\n             12-13 : 0.020 : 0.895 :   71   ||\n                14 : 0.012 : 0.907 :   43   |\n             15-16 : 0.017 : 0.924 :   61   ||\n             17-19 : 0.015 : 0.939 :   55   ||\n             20-22 : 0.013 : 0.952 :   46   |\n             23-26 : 0.011 : 0.963 :   40   |\n             27-30 : 0.009 : 0.972 :   33   |\n             31-39 : 0.009 : 0.981 :   33   |\n             40-65 : 0.009 : 0.991 :   34   |\n            66-201 : 0.009 : 1.000 :   33   |\n\n:: info: Directory content:\n    Directory      : .\n")),Object(r.b)("p",null,"The same command with ",Object(r.b)("strong",{parentName:"p"},"--db-file-prev")," option enables comparision and change trends are shown in [] brackets:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" view --db-file=boost_1_54_0/metrixpp.db --db-file-prev=boost_1_52_0/metrixpp.db\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),":: info: Overall metrics for 'std.code.complexity:cyclomatic' metric\n    Average        : 0.652902698283 [+0.00362138411453]\n    Minimum        : 0 [+0]\n    Maximum        : 37 [+1]\n    Total          : 1597.0 [+16.0]\n    Distribution   : 2446 [+11] regions in total (including 0 [+0] suppressed)\n      Metric value : Ratio : R-sum : Number of regions\n                 0 : 0.771 : 0.771 : 1886 [+5   ]   |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n                 1 : 0.110 : 0.881 :  268 [+4   ]   |||||||||||\n                 2 : 0.044 : 0.925 :  108 [+0   ]   ||||\n                 3 : 0.025 : 0.949 :   60 [+2   ]   ||\n                 4 : 0.016 : 0.966 :   40 [-1   ]   ||\n                 5 : 0.007 : 0.973 :   18 [-1   ]   |\n                 6 : 0.006 : 0.979 :   14 [+1   ]   |\n                 7 : 0.004 : 0.983 :   10 [+1   ]   \n                 8 : 0.003 : 0.986 :    8 [+1   ]   \n                 9 : 0.002 : 0.988 :    4 [+0   ]   \n                10 : 0.004 : 0.991 :    9 [-2   ]   \n                11 : 0.002 : 0.993 :    4 [+1   ]   \n                12 : 0.001 : 0.994 :    3 [+0   ]   \n                13 : 0.001 : 0.995 :    2 [+0   ]   \n                14 : 0.001 : 0.996 :    2 [+0   ]   \n             15-16 : 0.001 : 0.997 :    3 [-1   ]   \n             17-18 : 0.001 : 0.998 :    3 [+1   ]   \n                20 : 0.000 : 0.999 :    1 [+0   ]   \n             23-25 : 0.001 : 1.000 :    2 [+0   ]   \n             36-37 : 0.000 : 1.000 :    1 [+0   ]   \n\n:: info: Overall metrics for 'std.code.lines:code' metric\n    Average        : 6.64356984479 [+0.012181964309]\n    Minimum        : 0 [+0]\n    Maximum        : 201 [+4]\n    Total          : 23970.0 [+223.0]\n    Distribution   : 3608 [+27] regions in total (including 0 [+0] suppressed)\n      Metric value : Ratio : R-sum : Number of regions\n               0-1 : 0.088 : 0.088 :  319 [+3   ]   |||||||||\n                 2 : 0.320 : 0.409 : 1155 [+9   ]   ||||||||||||||||||||||||||||||||\n                 3 : 0.108 : 0.517 :  390 [-3   ]   |||||||||||\n                 4 : 0.081 : 0.598 :  294 [+7   ]   ||||||||\n                 5 : 0.080 : 0.678 :  290 [+7   ]   ||||||||\n                 6 : 0.061 : 0.739 :  220 [-1   ]   ||||||\n                 7 : 0.049 : 0.788 :  176 [-2   ]   |||||\n                 8 : 0.030 : 0.818 :  109 [-1   ]   |||\n                 9 : 0.025 : 0.843 :   89 [+4   ]   ||\n             10-11 : 0.032 : 0.876 :  117 [+9   ]   |||\n             12-13 : 0.020 : 0.895 :   71 [-9   ]   ||\n                14 : 0.012 : 0.907 :   43 [+0   ]   |\n             15-16 : 0.017 : 0.924 :   61 [+0   ]   ||\n             17-19 : 0.015 : 0.939 :   55 [+6   ]   ||\n             20-22 : 0.013 : 0.952 :   46 [-3   ]   |\n             23-26 : 0.011 : 0.963 :   40 [+2   ]   |\n             27-30 : 0.009 : 0.972 :   33 [-3   ]   |\n             31-39 : 0.009 : 0.981 :   33 [+0   ]   |\n             40-65 : 0.009 : 0.991 :   34 [+1   ]   |\n            66-201 : 0.009 : 1.000 :   33 [+1   ]   |\n\n:: info: Directory content:\n    Directory      : .\n")),Object(r.b)("h3",{id:"reducing-analysis-scope"},"Reducing analysis scope"),Object(r.b)("p",null,"There are two ways to reduce the analysis scope for the view tool. The first is to enumerate paths of interest. For example, the following command reduces scope to the 'allocators' sub-directory within the processed code."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" view --db-file=boost_1_54_0/metrixpp.db -- ./boost/interprocess/allocators\n')),Object(r.b)("p",null,"The second is to specify the ",Object(r.b)("strong",{parentName:"p"},"--scope-mode option"),", which instructs the tool to process only modified and/or new files/regions. For example, to view the summary metrics for all modified and new regions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" view --db-file=boost_1_54_0/metrixpp.db  --db-file-prev=boost_1_52_0/metrixpp.db --scope-mode=touched\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),":: info: Overall metrics for 'std.code.complexity:cyclomatic' metric\n    Average        : 1.84924623116 [-0.0230941943761]\n    Minimum        : 0 [+0]\n    Maximum        : 37 [+1]\n    Total          : 368.0 [+16.0]\n    Distribution   : 199 [+11] regions in total (including 0 [+0] suppressed)\n      Metric value : Ratio : R-sum : Number of regions\n                 0 : 0.608 : 0.608 : 121 [+5  ] |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n                 1 : 0.131 : 0.739 :  26 [+4  ] |||||||||||||\n                 2 : 0.070 : 0.809 :  14 [+0  ] |||||||\n                 3 : 0.060 : 0.869 :  12 [+2  ] ||||||\n                 4 : 0.015 : 0.884 :   3 [-1  ] ||\n                 5 : 0.015 : 0.899 :   3 [-1  ] ||\n                 6 : 0.005 : 0.905 :   1 [+1  ] |\n                 7 : 0.015 : 0.920 :   3 [+1  ] ||\n                 8 : 0.015 : 0.935 :   3 [+1  ] ||\n                 9 : 0.010 : 0.945 :   2 [+0  ] |\n                10 : 0.010 : 0.955 :   2 [-2  ] |\n                11 : 0.005 : 0.960 :   1 [+1  ] |\n                12 : 0.005 : 0.965 :   1 [+0  ] |\n                13 : 0.005 : 0.970 :   1 [+0  ] |\n                16 : 0.005 : 0.975 :   1 [-1  ] |\n                17 : 0.005 : 0.980 :   1 [+0  ] |\n                18 : 0.010 : 0.990 :   2 [+1  ] |\n                20 : 0.005 : 0.995 :   1 [+0  ] |\n             36-37 : 0.005 : 1.000 :   1 [+0  ] |\n\n:: info: Overall metrics for 'std.code.lines:code' metric\n    Average        : 15.9645390071 [-0.815853149771]\n    Minimum        : 0 [+0]\n    Maximum        : 201 [+6]\n    Total          : 4502.0 [+223.0]\n    Distribution   : 282 [+27] regions in total (including 0 [+0] suppressed)\n      Metric value : Ratio : R-sum : Number of regions\n               0-1 : 0.053 : 0.053 :  15 [+3  ] |||||\n                 2 : 0.124 : 0.177 :  35 [+9  ] ||||||||||||\n                 3 : 0.053 : 0.230 :  15 [-3  ] |||||\n                 4 : 0.060 : 0.291 :  17 [+7  ] ||||||\n                 5 : 0.089 : 0.379 :  25 [+7  ] |||||||||\n                 6 : 0.060 : 0.440 :  17 [-1  ] ||||||\n                 7 : 0.050 : 0.489 :  14 [-2  ] |||||\n               8-9 : 0.074 : 0.564 :  21 [+3  ] |||||||\n                10 : 0.035 : 0.599 :  10 [+5  ] ||||\n                11 : 0.082 : 0.681 :  23 [+4  ] ||||||||\n             12-13 : 0.043 : 0.723 :  12 [-9  ] ||||\n             14-15 : 0.039 : 0.762 :  11 [-1  ] ||||\n             16-18 : 0.028 : 0.791 :   8 [+4  ] |||\n             19-22 : 0.039 : 0.830 :  11 [+0  ] ||||\n             23-26 : 0.039 : 0.869 :  11 [+2  ] ||||\n             27-32 : 0.028 : 0.897 :   8 [-3  ] |||\n             38-50 : 0.025 : 0.922 :   7 [+0  ] ||\n             51-69 : 0.025 : 0.947 :   7 [+1  ] ||\n            71-100 : 0.032 : 0.979 :   9 [+2  ] |||\n           101-201 : 0.021 : 1.000 :   6 [-1  ] ||\n\n:: info: Directory content:\n    Directory      : .\n")),Object(r.b)("h3",{id:"detailed-metrics-per-fileregion"},"Detailed metrics per file/region"),Object(r.b)("p",null,"The same view tool can print detailed metrics per file and per every region in the specified file. In order to get detailed metrics, enumerate files of interest after '--'. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" view --db-file=boost_1_54_0/metrixpp.db --db-file-prev=boost_1_52_0/metrixpp.db -- ./boost/interprocess/detail/managed_open_or_create_impl.hpp\n')),Object(r.b)("p",null,"produces output similar to this (truncated to make the page shorter):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"./interprocess/detail/managed_open_or_create_impl.hpp:302: info: Metrics per 'priv_open_or_create' region\n    Region name    : priv_open_or_create\n    Region type    : function\n    Offsets        : 8314-14526\n    Line numbers   : 301-467\n    Modified       : True\n    std.code.complexity:cyclomatic: 37 [+1]\n    std.code.lines:code: 148 [+4]\n")),Object(r.b)("h3",{id:"more-about-the-viewer"},"More about the viewer"),Object(r.b)("p",null,"The 'view' command has got an option to alter the output format. It is possible to get the same data in xml or python dictionary formats. This can be particularly useful for integration of the tool with other applications. For example, an editor may re-collect and show context based metrics when a file is saved."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" view --db-file=boost_1_54_0/metrixpp.db --format=xml\nCheck other options of the view tool by executing:\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" view --help\n')),Object(r.b)("h2",{id:"apply-thresholds"},"Apply thresholds"),Object(r.b)("p",null,"The viewer shows (above) that there are functions with quite large cyclomatic complexities. Growth of this metric can be considered as negative trend. The Metrix++ 'limit' tool offers the capability to manage control over trends by applying limits to metric values. Exceeded limits could be raised as alarms by quality management and control."),Object(r.b)("h3",{id:"hotspots"},"Hotspots"),Object(r.b)("p",null,"The hotspots mode of the limit tool helps to identify top files/regions exceeding a metric threshold. Let's identify the top 3 functions in the boost interprocess library, which exceed a limit of 15 points of cyclomatic complexity:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" limit --db-file=boost_1_54_0/metrixpp.db --max-limit=std.code.complexity:cyclomatic:15 --hotspots=3\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"./interprocess/detail/managed_open_or_create_impl.hpp:302: warning: Metric 'std.code.complexity:cyclomatic' for region 'priv_open_or_create' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : priv_open_or_create\n    Metric value   : 37\n    Modified       : None\n    Change trend   : None\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/streams/vectorstream.hpp:284: warning: Metric 'std.code.complexity:cyclomatic' for region 'seekoff' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : seekoff\n    Metric value   : 25\n    Modified       : None\n    Change trend   : None\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/streams/bufferstream.hpp:174: warning: Metric 'std.code.complexity:cyclomatic' for region 'seekoff' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : seekoff\n    Metric value   : 23\n    Modified       : None\n    Change trend   : None\n    Limit          : 15.0\n    Suppressed     : False\n")),Object(r.b)("h3",{id:"controlling-trends"},"Controlling trends"),Object(r.b)("p",null,"The exit code of the 'limit' tool is equal to the number of warnings printed. This supports use of the tool as a static analysis tool during the software build process. In this case, a non-zero exit code means that there are violations to the agreed standards and it may fail the build. The same command without --hotspots option will print all regions/files exceeding the specified limit:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" limit --db-file=boost_1_54_0/metrixpp.db --max-limit=std.code.complexity:cyclomatic:15\n')),Object(r.b)("h4",{id:"modes-to-exclude-old-code-from-the-considiration"},"Modes to exclude old code from the considiration"),Object(r.b)("p",null,"However, it is likely there are many warnings printed in this mode, especially if very old or legacy code is profiled against new metrics and coding rules. Although all warnings can be removed by re-factoring as a big task force activity, it is where many tools are rejected, because it is difficult to justify the initial cost of applying and integrating them. The Metrix++ 'limit' tool has got an option --warn-mode, which helps to overcome this problem."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"--warn-mode=touched")," encourages re-factoring only for new and modified regions. It enables continuous refactoring. It does not matter how late the rule is applied or the coding standard is modified. It is possible to do it anytime with zero initial investment. For example, applying it to the boost interprocess library for a changes between 1.52 and 1.54 versions results in only 6 warnings:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" limit --db-file=boost_1_54_0/metrixpp.db --db-file-prev=boost_1_52_0/metrixpp.db --max-limit=std.code.complexity:cyclomatic:15 --warn-mode=touched\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"./interprocess/detail/managed_open_or_create_impl.hpp:302: warning: Metric 'std.code.complexity:cyclomatic' for region 'priv_open_or_create' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : priv_open_or_create\n    Metric value   : 37\n    Modified       : True\n    Change trend   : +1\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/ipc/message_queue.hpp:375: warning: Metric 'std.code.complexity:cyclomatic' for region 'insert_at' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : insert_at\n    Metric value   : 16\n    Modified       : True\n    Change trend   : 0\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/mapped_region.hpp:575: warning: Metric 'std.code.complexity:cyclomatic' for region 'mapped_region' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : mapped_region\n    Metric value   : 18\n    Modified       : True\n    Change trend   : +2\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/mem_algo/detail/mem_algo_common.hpp:452: warning: Metric 'std.code.complexity:cyclomatic' for region 'priv_allocate_many' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : priv_allocate_many\n    Metric value   : 20\n    Modified       : True\n    Change trend   : 0\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/mem_algo/rbtree_best_fit.hpp:787: warning: Metric 'std.code.complexity:cyclomatic' for region 'priv_expand_both_sides' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : priv_expand_both_sides\n    Metric value   : 17\n    Modified       : True\n    Change trend   : 0\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/sync/windows/named_sync.hpp:98: warning: Metric 'std.code.complexity:cyclomatic' for region 'open_or_create' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : open_or_create\n    Metric value   : 18\n    Modified       : True\n    Change trend   : 0\n    Limit          : 15.0\n    Suppressed     : False\n")),Object(r.b)("p",null,"If it is challenging or of little benefit to refactor everything touched, --warn-mode=trends simplifies the control over modified regions and only makes sure that there are no regressions in modified code. In other words, a warning is printed about a modified region/file only if a metric exceeds the specified limit and the value of the metric has got a negative trend due to the modification. It is possible to apply it anytime with zero initial investment and almost zero on-going investment around old code. For example, applying it to the boost interprocess library for a changes between 1.52 and 1.54 versions results in only 2 warnings:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" limit --db-file=boost_1_54_0/metrixpp.db --db-file-prev=boost_1_52_0/metrixpp.db --max-limit=std.code.complexity:cyclomatic:15 --warn-mode=trend\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"./interprocess/detail/managed_open_or_create_impl.hpp:302: warning: Metric 'std.code.complexity:cyclomatic' for region 'priv_open_or_create' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : priv_open_or_create\n    Metric value   : 37\n    Modified       : True\n    Change trend   : +1\n    Limit          : 15.0\n    Suppressed     : False\n\n./interprocess/mapped_region.hpp:575: warning: Metric 'std.code.complexity:cyclomatic' for region 'mapped_region' exceeds the limit.\n    Metric name    : std.code.complexity:cyclomatic\n    Region name    : mapped_region\n    Metric value   : 18\n    Modified       : True\n    Change trend   : +2\n    Limit          : 15.0\n    Suppressed     : False\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"--warn-mode=new")," ignores existing code and ensures that warnings are only about new code. For example, applying it to the boost interprocess library for a changes between 1.52 and 1.54 versions results in 0 warnings, so it shows that the new code is totally compliant with the standard required in the example."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" limit --db-file=boost_1_54_0/metrixpp.db --db-file-prev=boost_1_52_0/metrixpp.db --max-limit=std.code.complexity:cyclomatic:15 --warn-mode=new\n')),Object(r.b)("h4",{id:"suppressions"},"Suppressions"),Object(r.b)("p",null,"It is possible to suppress warnings. Suppressions are collected from comments in code and used by the 'limit' tool to filter out suppressed warnings. It supports fine grained control over false-positive warnings, if there are any."),Object(r.b)("p",null,"In order to suppress a warning:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"per region metrics: put the metrix++ instruction in the comments before the region, for example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),'// This function returns string typed\n// representation of a name of a color,\n// requested by color\'s id\n// metrix++: suppress std.code.complexity:cyclomatic\nstd::string getColorName(int color_id)\n{\n    switch (color_id)\n    {\n    case COLOR_RED:\n        return std::string("red")\n    case COLOR_GREEN:\n        return std::string("green")\n    case COLOR_BLUE:\n        return std::string("blue")\n    /* and so on */\n    }\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"per file metrics: put the metrix++ instruction in the comments at the beginning of a file, for example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"//\n// This file does processing of colors and brushes\n// \n// However, it is too long and big file, and there is no time\n// to split it into multiple file, so shut up the metrix++ warnings:\n// metrix++: suppress std.general:size\n//\n \nstd::string getColorName(int color_id)\n{\n    ...\n...\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"activate collection of suppressions:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" collect --std.suppress\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"run the 'limit' tool WITHOUT --disable-suppressions option:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" limit ...\n')),Object(r.b)("h2",{id:"other-applications"},"Other applications"),Object(r.b)("h3",{id:"checking-data-file-properties"},"Checking data file properties"),Object(r.b)("p",null,"The Metrix++ 'info' tool is helpful to check the properties of a data file, like the settings used to write it, collected metrics and files processed. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'> python "/path/to/metrix++.py" info --db-file=boost_1_54_0/metrixpp.db\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-boost_1_54_0/metrixpp.db::",metastring:"info: Created using plugins and settings:","info:":!0,Created:!0,using:!0,plugins:!0,and:!0,"settings:":!0}),"    version        : 1.0\n    std.code.complexity:version: 1.1\n    std.code.cpp:version: 1.1\n    std.code.cpp:files: *.c,*.cc,*.cpp,*.cxx,*.h,*.hh,*.hpp,*.hxx\n    std.code.cs:version: 1.0\n    std.code.cs:files: *.cs\n    std.code.java:version: 1.1\n    std.code.java:files: *.java\n    std.code.lines:version: 1.1\n\ntest_workflow.db:: info: Collected metrics:\n    std.code.complexity:cyclomatic: \n    std.code.lines:code: \n\n:: info: Processed files and checksums:\n    ./interprocess/allocators/detail/node_pool.hpp: 0xb099a7c3\n    ./interprocess/allocators/detail/node_tools.hpp: 0xaaf5044d\n    ./interprocess/anonymous_shared_memory.hpp: 0x2bf06cb0\n    ./interprocess/containers/allocation_type.hpp: 0x8e95cda0\n    ./interprocess/containers/containers_fwd.hpp: 0xa4d0d9f7\n    ./interprocess/containers/deque.hpp: 0x6dbb77af\n    ./interprocess/containers/flat_map.hpp: 0x6750338c\n    ...\n")),Object(r.b)("h3",{id:"exporting-results"},"Exporting results"),Object(r.b)("p",null,"The Metrix++ 'export' tool exports data files to csv formated files. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'> python "/path/to/metrix++.py" export --db-file=boost_1_54_0/metrixpp.db > boost_1_54_0/metrixpp.csv\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"file,region,type,modified,line start,line end,std.code.complexity:cyclomatic,std.code.lines:code\n./interprocess/allocators/detail/node_pool.hpp,__global__,global,,1,110,,0\n./interprocess/allocators/detail/node_pool.hpp,boost,namespace,,33,105,,2\n./interprocess/allocators/detail/node_pool.hpp,interprocess,namespace,,34,104,,2\n./interprocess/allocators/detail/node_pool.hpp,ipcdetail,namespace,,35,103,,4\n./interprocess/allocators/detail/node_pool.hpp,SegmentManager,class,,39,72,,16\n...\n")),Object(r.b)("p",null,"Files with csv format can be opened by applications, like Microsoft Office Excel, with advanced analysis capabilities. For example, to draw this distribution graph:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"./../src/img/piechart.png",alt:"Distribution graph"}))),Object(r.b)("p",null,"It is not recommended to use the export tool to implement custom post-analysis Metrix++ extensions. The main reason is that granted backward compatibility support for csv columns is not granted. Another main reason is that exporting is relatively slow process. It is recommended to use Metrix++ extensions API instead."))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,u=d["".concat(a,".").concat(b)]||d[b]||m[b]||r;return n?i.a.createElement(u,c(c({ref:t},l),{},{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);