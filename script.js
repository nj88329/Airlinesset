const airlines = {
    asa: 'Alaska Airlines',
    aay: 'Allegiant Air',
    aal: 'American Airlines',
    dal: 'Delta',
    fft: 'Frontier Airlines',
    hal: 'Hawaiian Airlines',
    jbu: 'JetBlue Airways',
    swa: 'Southwest Airlines',
    nks: 'Spirit Airlines',
    scx: 'Sun Country Airlines',
    ual: 'United Airlines',
    vrd: 'Virgin America'
  };
  
   const flights_jan_01_2008 = [
    {airline: 'ual', time: '05:29:38'},
    {airline: 'swa', time: '09:43:37'},
    {airline: 'ual', time: '16:37:25'},
    {airline: 'ual', time: '16:10:56'},
    {airline: 'ual', time: '20:53:33'},
    {airline: 'swa', time: '16:10:13'},
    {airline: 'fft', time: '14:05:51'},
    {airline: 'swa', time: '06:15:57'},
    {airline: 'aal', time: '06:24:29'},
    {airline: 'ual', time: '16:25:05'},
    {airline: 'dal', time: '13:14:00'},
    {airline: 'swa', time: '06:45:47'},
    {airline: 'ual', time: '12:50:26'},
    {airline: 'swa', time: '11:47:28'},
    {airline: 'aal', time: '15:00:06'},
    {airline: 'aal', time: '18:17:56'},
    {airline: 'jbu', time: '06:10:29'},
    {airline: 'aal', time: '18:23:00'},
    {airline: 'dal', time: '13:24:19'},
    {airline: 'aal', time: '18:04:40'},
    {airline: 'dal', time: '12:31:42'},
    {airline: 'swa', time: '13:57:24'},
    {airline: 'hal', time: '13:01:05'},
    {airline: 'aay', time: '14:41:22'},
    {airline: 'aal', time: '08:36:12'},
    {airline: 'dal', time: '09:10:29'},
    {airline: 'asa', time: '18:08:07'},
    {airline: 'ual', time: '16:13:57'},
    {airline: 'swa', time: '10:33:18'},
    {airline: 'aal', time: '10:44:26'},
    {airline: 'swa', time: '13:13:16'},
    {airline: 'dal', time: '22:53:26'},
    {airline: 'jbu', time: '23:53:22'},
    {airline: 'aal', time: '14:03:55'},
    {airline: 'aal', time: '12:36:26'},
    {airline: 'ual', time: '05:49:24'},
    {airline: 'swa', time: '16:11:13'},
    {airline: 'ual', time: '17:23:32'},
    {airline: 'fft', time: '11:09:41'},
    {airline: 'dal', time: '07:21:54'},
    {airline: 'swa', time: '14:49:37'},
    {airline: 'dal', time: '09:07:03'},
    {airline: 'aal', time: '16:12:18'},
    {airline: 'hal', time: '15:54:52'},
    {airline: 'swa', time: '12:24:48'},
    {airline: 'swa', time: '22:48:22'},
    {airline: 'aal', time: '10:05:33'},
    {airline: 'hal', time: '15:34:09'},
    {airline: 'dal', time: '15:26:40'},
    {airline: 'dal', time: '12:18:35'},
    {airline: 'ual', time: '17:54:23'},
    {airline: 'aal', time: '17:26:22'},
    {airline: 'ual', time: '16:28:14'},
    {airline: 'aay', time: '10:27:25'},
    {airline: 'swa', time: '14:08:30'},
    {airline: 'dal', time: '18:28:56'},
    {airline: 'nks', time: '21:04:45'},
    {airline: 'dal', time: '04:32:04'},
    {airline: 'hal', time: '11:01:54'},
    {airline: 'ual', time: '11:04:06'},
    {airline: 'nks', time: '13:30:01'},
    {airline: 'dal', time: '05:15:07'},
    {airline: 'swa', time: '09:06:39'},
    {airline: 'ual', time: '18:35:10'},
    {airline: 'swa', time: '13:55:52'},
    {airline: 'swa', time: '15:32:57'},
    {airline: 'aal', time: '07:52:20'},
    {airline: 'aal', time: '09:49:26'},
    {airline: 'swa', time: '12:18:27'},
    {airline: 'scx', time: '03:01:47'},
    {airline: 'dal', time: '17:38:12'},
    {airline: 'dal', time: '12:54:19'},
    {airline: 'dal', time: '13:01:11'},
    {airline: 'dal', time: '11:09:12'},
    {airline: 'swa', time: '15:07:08'},
    {airline: 'fft', time: '12:07:14'},
    {airline: 'aal', time: '17:57:24'},
    {airline: 'jbu', time: '09:30:27'},
    {airline: 'swa', time: '18:17:57'},
    {airline: 'nks', time: '03:42:29'},
    {airline: 'ual', time: '14:32:18'},
    {airline: 'jbu', time: '13:02:10'},
    {airline: 'ual', time: '16:36:18'},
    {airline: 'jbu', time: '23:30:06'},
    {airline: 'dal', time: '05:43:19'},
    {airline: 'swa', time: '11:29:27'},
    {airline: 'fft', time: '19:55:29'},
    {airline: 'swa', time: '23:13:20'},
    {airline: 'scx', time: '16:59:09'},
    {airline: 'swa', time: '16:03:01'},
    {airline: 'swa', time: '17:54:40'},
    {airline: 'ual', time: '05:34:50'},
    {airline: 'aal', time: '12:26:10'},
    {airline: 'swa', time: '14:25:03'},
    {airline: 'ual', time: '00:47:08'},
    {airline: 'asa', time: '09:02:07'},
    {airline: 'swa', time: '11:56:48'},
    {airline: 'dal', time: '19:01:21'},
    {airline: 'dal', time: '09:02:09'},
    {airline: 'ual', time: '17:45:12'},
    {airline: 'dal', time: '02:07:28'},
    {airline: 'aal', time: '05:05:30'},
    {airline: 'fft', time: '12:19:04'},
    {airline: 'swa', time: '18:43:06'},
    {airline: 'aal', time: '15:12:07'},
    {airline: 'dal', time: '12:52:37'},
    {airline: 'swa', time: '20:06:23'},
    {airline: 'dal', time: '08:59:38'},
    {airline: 'aal', time: '09:44:26'},
    {airline: 'dal', time: '12:29:42'},
    {airline: 'dal', time: '18:28:37'},
    {airline: 'swa', time: '12:23:56'},
    {airline: 'dal', time: '10:22:46'},
    {airline: 'fft', time: '19:44:57'},
    {airline: 'scx', time: '19:15:23'},
    {airline: 'aal', time: '11:23:48'},
    {airline: 'swa', time: '10:14:45'},
    {airline: 'jbu', time: '14:33:05'},
    {airline: 'aal', time: '18:30:13'},
    {airline: 'aal', time: '13:35:04'},
    {airline: 'vrd', time: '09:51:28'},
    {airline: 'dal', time: '07:59:51'},
    {airline: 'aal', time: '10:02:17'},
    {airline: 'swa', time: '09:48:35'},
    {airline: 'swa', time: '14:39:45'},
    {airline: 'aal', time: '06:05:32'},
    {airline: 'ual', time: '13:47:16'},
    {airline: 'dal', time: '15:24:00'},
    {airline: 'aal', time: '10:34:33'},
    {airline: 'ual', time: '19:22:18'},
    {airline: 'ual', time: '16:30:38'},
    {airline: 'aal', time: '15:52:17'},
    {airline: 'vrd', time: '17:56:02'},
    {airline: 'hal', time: '13:27:25'},
    {airline: 'ual', time: '07:41:24'},
    {airline: 'swa', time: '10:22:09'},
    {airline: 'dal', time: '19:14:51'},
    {airline: 'fft', time: '03:51:58'},
    {airline: 'aal', time: '17:35:52'},
    {airline: 'swa', time: '05:28:20'},
    {airline: 'ual', time: '18:12:59'},
    {airline: 'fft', time: '05:13:48'},
    {airline: 'nks', time: '18:52:43'},
    {airline: 'dal', time: '01:44:24'},
    {airline: 'swa', time: '12:48:38'},
    {airline: 'swa', time: '16:00:29'},
    {airline: 'aay', time: '20:01:22'},
    {airline: 'ual', time: '18:05:08'},
    {airline: 'ual', time: '09:00:47'},
    {airline: 'aal', time: '19:22:17'},
    {airline: 'fft', time: '19:10:22'},
    {airline: 'ual', time: '18:59:15'},
    {airline: 'aal', time: '23:14:46'},
    {airline: 'aal', time: '11:52:43'},
    {airline: 'aal', time: '16:19:19'},
    {airline: 'aal', time: '10:01:53'},
    {airline: 'swa', time: '04:38:45'},
    {airline: 'dal', time: '11:50:00'},
    {airline: 'aal', time: '07:39:12'},
    {airline: 'ual', time: '16:43:08'},
    {airline: 'dal', time: '12:09:48'},
    {airline: 'aal', time: '12:40:04'},
    {airline: 'dal', time: '13:33:49'},
    {airline: 'ual', time: '19:05:01'},
    {airline: 'asa', time: '05:41:40'},
    {airline: 'nks', time: '16:24:18'},
    {airline: 'jbu', time: '10:03:42'},
    {airline: 'dal', time: '05:04:12'},
    {airline: 'dal', time: '18:27:56'},
    {airline: 'fft', time: '15:56:24'},
    {airline: 'aal', time: '15:22:06'},
    {airline: 'aal', time: '18:59:19'},
    {airline: 'fft', time: '09:44:18'},
    {airline: 'ual', time: '12:37:32'},
    {airline: 'aal', time: '14:45:16'},
    {airline: 'dal', time: '20:38:49'},
    {airline: 'asa', time: '17:49:51'},
    {airline: 'swa', time: '13:14:44'},
    {airline: 'aal', time: '19:54:25'},
    {airline: 'swa', time: '10:51:07'},
    {airline: 'scx', time: '08:46:32'},
    {airline: 'dal', time: '09:35:04'},
    {airline: 'jbu', time: '12:16:34'},
    {airline: 'ual', time: '17:24:21'},
    {airline: 'asa', time: '17:20:40'},
    {airline: 'swa', time: '12:39:43'},
    {airline: 'ual', time: '17:43:45'},
    {airline: 'aal', time: '14:37:30'},
    {airline: 'vrd', time: '19:30:47'},
    {airline: 'dal', time: '16:23:10'},
    {airline: 'swa', time: '10:41:18'},
    {airline: 'jbu', time: '18:18:57'},
    {airline: 'ual', time: '12:42:06'},
    {airline: 'ual', time: '16:36:06'},
    {airline: 'aay', time: '15:25:09'},
    {airline: 'swa', time: '14:37:50'},
    {airline: 'aal', time: '11:26:20'},
    {airline: 'scx', time: '10:16:00'},
    {airline: 'aal', time: '18:54:15'},
    {airline: 'ual', time: '14:02:44'},
    {airline: 'aal', time: '18:58:54'},
    {airline: 'aal', time: '22:18:31'},
    {airline: 'dal', time: '10:06:25'},
    {airline: 'vrd', time: '11:52:09'},
    {airline: 'swa', time: '12:31:08'},
    {airline: 'jbu', time: '05:06:06'},
    {airline: 'swa', time: '20:57:21'},
    {airline: 'aal', time: '07:02:11'},
    {airline: 'nks', time: '10:52:04'},
    {airline: 'jbu', time: '09:23:26'},
    {airline: 'dal', time: '11:56:59'},
    {airline: 'vrd', time: '15:48:07'},
    {airline: 'swa', time: '11:54:17'},
    {airline: 'aal', time: '09:09:52'},
    {airline: 'swa', time: '10:06:07'},
    {airline: 'jbu', time: '17:59:30'},
    {airline: 'ual', time: '19:52:32'},
    {airline: 'fft', time: '05:05:02'},
    {airline: 'dal', time: '13:03:24'},
    {airline: 'aal', time: '12:30:02'},
    {airline: 'aay', time: '20:36:22'},
    {airline: 'swa', time: '09:49:03'},
    {airline: 'aal', time: '15:05:27'},
    {airline: 'nks', time: '13:17:34'},
    {airline: 'fft', time: '07:08:53'},
    {airline: 'jbu', time: '06:50:59'},
    {airline: 'dal', time: '02:13:59'},
    {airline: 'swa', time: '20:58:05'},
    {airline: 'fft', time: '12:26:32'},
    {airline: 'dal', time: '11:59:26'},
    {airline: 'swa', time: '16:11:54'},
    {airline: 'asa', time: '06:28:47'},
    {airline: 'aay', time: '12:05:21'},
    {airline: 'fft', time: '05:36:31'},
    {airline: 'aal', time: '14:22:57'},
    {airline: 'aal', time: '17:35:39'},
    {airline: 'aal', time: '13:18:06'},
    {airline: 'ual', time: '15:27:26'},
    {airline: 'swa', time: '12:08:54'},
    {airline: 'swa', time: '07:10:21'},
    {airline: 'aal', time: '08:41:01'},
    {airline: 'aal', time: '11:32:11'},
    {airline: 'vrd', time: '17:39:55'},
    {airline: 'swa', time: '05:03:36'},
    {airline: 'ual', time: '12:45:38'},
    {airline: 'swa', time: '13:44:01'},
    {airline: 'dal', time: '12:49:53'},
    {airline: 'hal', time: '21:16:05'},
    {airline: 'jbu', time: '16:30:25'},
    {airline: 'swa', time: '13:20:29'},
    {airline: 'aal', time: '12:09:01'},
    {airline: 'jbu', time: '04:01:56'},
    {airline: 'swa', time: '08:20:09'},
    {airline: 'ual', time: '06:04:13'},
    {airline: 'ual', time: '21:00:39'},
    {airline: 'swa', time: '11:31:21'},
    {airline: 'dal', time: '12:08:45'},
    {airline: 'nks', time: '14:18:00'},
    {airline: 'swa', time: '20:22:47'},
    {airline: 'aal', time: '11:08:18'},
    {airline: 'swa', time: '16:56:20'},
    {airline: 'ual', time: '14:35:53'},
    {airline: 'scx', time: '13:14:21'},
    {airline: 'aal', time: '17:43:32'},
    {airline: 'swa', time: '16:24:16'},
    {airline: 'swa', time: '01:46:35'},
    {airline: 'fft', time: '13:21:42'},
    {airline: 'vrd', time: '15:39:02'},
    {airline: 'ual', time: '16:21:44'},
    {airline: 'ual', time: '11:49:52'},
    {airline: 'dal', time: '13:11:03'},
    {airline: 'ual', time: '05:08:12'},
    {airline: 'aal', time: '20:37:35'},
    {airline: 'swa', time: '08:52:23'},
    {airline: 'nks', time: '12:27:16'},
    {airline: 'swa', time: '05:44:29'},
    {airline: 'aal', time: '14:17:17'},
    {airline: 'aal', time: '13:52:00'},
    {airline: 'aal', time: '15:18:50'},
    {airline: 'dal', time: '14:44:51'},
    {airline: 'asa', time: '10:26:36'},
    {airline: 'swa', time: '16:06:49'},
    {airline: 'aay', time: '14:19:16'},
    {airline: 'dal', time: '18:31:50'},
    {airline: 'fft', time: '17:58:35'},
    {airline: 'jbu', time: '14:59:10'},
    {airline: 'dal', time: '21:07:57'},
    {airline: 'swa', time: '08:42:38'},
    {airline: 'swa', time: '18:35:02'},
    {airline: 'swa', time: '10:11:07'},
    {airline: 'dal', time: '15:14:09'},
    {airline: 'vrd', time: '10:32:57'},
    {airline: 'fft', time: '09:20:27'},
    {airline: 'dal', time: '07:39:15'},
    {airline: 'dal', time: '11:46:35'},
    {airline: 'aal', time: '16:23:52'},
    {airline: 'dal', time: '10:10:56'},
    {airline: 'swa', time: '05:44:40'},
    {airline: 'dal', time: '14:14:41'},
    {airline: 'swa', time: '12:37:33'},
    {airline: 'asa', time: '11:55:15'},
    {airline: 'ual', time: '20:27:12'},
    {airline: 'ual', time: '12:40:43'},
    {airline: 'dal', time: '22:31:38'},
    {airline: 'aal', time: '17:43:58'},
    {airline: 'aal', time: '10:55:18'},
    {airline: 'aal', time: '12:53:10'},
    {airline: 'jbu', time: '14:30:51'},
    {airline: 'aal', time: '15:09:07'},
    {airline: 'scx', time: '11:29:48'},
    {airline: 'scx', time: '09:29:25'},
    {airline: 'aal', time: '20:35:50'},
    {airline: 'aal', time: '08:27:14'},
    {airline: 'nks', time: '11:35:04'},
    {airline: 'aal', time: '11:30:45'},
    {airline: 'dal', time: '09:48:04'},
    {airline: 'aal', time: '14:09:51'},
    {airline: 'dal', time: '14:28:32'},
    {airline: 'ual', time: '13:57:27'},
    {airline: 'swa', time: '17:27:03'},
    {airline: 'aal', time: '17:58:15'},
    {airline: 'swa', time: '12:31:18'},
    {airline: 'dal', time: '10:46:28'},
    {airline: 'aal', time: '21:27:50'},
    {airline: 'nks', time: '17:03:51'},
    {airline: 'swa', time: '13:48:23'},
    {airline: 'ual', time: '07:08:52'},
    {airline: 'jbu', time: '13:28:34'},
    {airline: 'aal', time: '12:01:22'},
    {airline: 'aal', time: '14:11:19'},
    {airline: 'aal', time: '12:00:57'},
    {airline: 'hal', time: '02:05:54'},
    {airline: 'dal', time: '17:33:36'},
    {airline: 'dal', time: '14:55:33'},
    {airline: 'asa', time: '16:35:03'},
    {airline: 'swa', time: '09:27:19'},
    {airline: 'asa', time: '19:38:03'},
    {airline: 'swa', time: '03:28:25'},
    {airline: 'aal', time: '00:03:01'},
    {airline: 'jbu', time: '18:53:23'},
    {airline: 'swa', time: '12:44:28'},
    {airline: 'asa', time: '22:39:43'},
    'invalid entry',
    {airline: 'aal', time: '14:55:53'},
    {airline: 'dal', time: '17:57:02'},
    {airline: 'dal', time: '13:45:14'},
    {airline: 'scx', time: '08:56:00'},
    {airline: 'scx', time: '15:13:40'},
    {airline: 'dal', time: '08:33:56'},
    {airline: 'fft', time: '20:21:00'},
    {airline: 'ual', time: '12:42:30'},
    {airline: 'ual', time: '06:52:51'},
    {airline: 'swa', time: '16:44:52'},
    {airline: 'aal', time: '16:37:55'},
    {airline: 'swa', time: '12:32:42'},
    {airline: 'aay', time: '16:05:24'},
    {airline: 'aal', time: '16:29:43'},
    {airline: 'dal', time: '16:18:55'},
    {airline: 'aal', time: '15:24:32'},
    {airline: 'nks', time: '10:16:14'},
    {airline: 'ual', time: '14:10:39'},
    {airline: 'aal', time: '20:03:03'},
    {airline: 'nks', time: '11:19:35'},
    {airline: 'aal', time: '13:52:51'},
    {airline: 'vrd', time: '13:20:42'},
    {airline: 'swa', time: '05:25:09'},
    {airline: 'dal', time: '07:57:49'},
    {airline: 'ual', time: '13:09:14'},
    {airline: 'fft', time: '15:30:04'},
    {airline: 'jbu', time: '14:39:01'},
    {airline: 'jbu', time: '12:11:29'},
    {airline: 'dal', time: '12:46:45'},
    {airline: 'scx', time: '20:48:47'},
    {airline: 'dal', time: '16:43:04'},
    {airline: 'ual', time: '17:29:00'},
    {airline: 'aal', time: '17:14:15'},
    {airline: 'dal', time: '13:27:27'},
    {airline: 'swa', time: '16:04:18'},
    {airline: 'aal', time: '09:16:26'},
    {airline: 'fft', time: '15:19:06'},
    {airline: 'dal', time: '16:49:43'},
    {airline: 'aal', time: '17:40:24'},
    {airline: 'dal', time: '16:26:22'},
    {airline: 'ual', time: '13:48:59'},
    {airline: 'jbu', time: '14:13:46'},
    {airline: 'ual', time: '10:24:24'},
    {airline: 'aal', time: '12:08:12'},
    {airline: 'swa', time: '11:15:00'},
    {airline: 'dal', time: '09:11:42'},
    {airline: 'ual', time: '16:53:36'},
    {airline: 'swa', time: '09:15:35'},
    {airline: 'aal', time: '03:09:20'},
    {airline: 'nks', time: '10:24:12'},
    {airline: 'ual', time: '09:42:08'},
    {airline: 'dal', time: '13:24:05'},
    {airline: 'nks', time: '12:08:33'},
    {airline: 'swa', time: '16:16:26'},
    {airline: 'nks', time: '07:26:55'},
    {airline: 'swa', time: '21:39:09'},
    {airline: 'ual', time: '07:37:17'},
    {airline: 'ual', time: '08:51:26'},
    {airline: 'ual', time: '10:50:59'},
    {airline: 'dal', time: '19:56:56'},
    {airline: 'jbu', time: '15:41:24'},
    {airline: 'dal', time: '11:34:35'},
    {airline: 'swa', time: '17:21:26'},
    {airline: 'jbu', time: '03:21:49'},
    {airline: 'swa', time: '07:23:10'},
    {airline: 'aal', time: '10:38:49'},
    {airline: 'asa', time: '10:23:02'},
    {airline: 'aal', time: '09:02:36'},
    {airline: 'aay', time: '09:00:28'},
    {airline: 'aal', time: '16:10:06'},
    {airline: 'swa', time: '15:59:49'},
    {airline: 'ual', time: '12:26:19'},
    {airline: 'ual', time: '18:07:19'},
    {airline: 'aay', time: '18:59:32'},
    {airline: 'aal', time: '03:19:34'},
    {airline: 'aay', time: '16:35:41'},
    {airline: 'ual', time: '17:28:00'},
    {airline: 'fft', time: '10:05:34'},
    {airline: 'aal', time: '15:47:16'},
    {airline: 'ual', time: '09:59:56'},
    {airline: 'ual', time: '15:09:10'},
    {airline: 'asa', time: '18:39:46'},
    {airline: 'ual', time: '06:37:21'},
    {airline: 'dal', time: '18:33:51'},
    {airline: 'dal', time: '05:54:23'},
    {airline: 'dal', time: '01:12:24'},
    {airline: 'dal', time: '13:50:36'},
    {airline: 'swa', time: '14:00:58'},
    {airline: 'fft', time: '15:35:01'},
    {airline: 'nks', time: '04:40:43'},
    {airline: 'aal', time: '23:53:01'},
    {airline: 'nks', time: '05:23:26'},
    {airline: 'fft', time: '03:53:57'},
    {airline: 'dal', time: '15:01:43'},
    {airline: 'swa', time: '15:00:02'},
    {airline: 'dal', time: '18:56:08'},
    {airline: 'jbu', time: '10:37:55'},
    {airline: 'dal', time: '18:38:57'},
    {airline: 'vrd', time: '13:23:41'},
    {airline: 'ual', time: '09:15:49'},
    {airline: 'dal', time: '12:24:51'},
    {airline: 'jbu', time: '17:22:14'},
    {airline: 'jbu', time: '17:59:33'},
    {airline: 'swa', time: '07:48:19'},
    {airline: 'aal', time: '02:57:32'},
    {airline: 'ual', time: '13:07:47'},
    {airline: 'jbu', time: '10:30:22'},
    {airline: 'ual', time: '14:01:34'},
    {airline: 'nks', time: '17:20:07'},
    {airline: 'fft', time: '10:59:21'},
    {airline: 'dal', time: '12:22:34'},
    {airline: 'dal', time: '13:33:59'},
    {airline: 'swa', time: '00:47:41'},
    {airline: 'dal', time: '10:40:54'},
    {airline: 'aal', time: '15:57:10'},
    {airline: 'swa', time: '06:15:43'},
    {airline: 'aal', time: '12:00:13'},
    {airline: 'ual', time: '18:43:26'},
    {airline: 'swa', time: '13:27:12'},
    {airline: 'dal', time: '11:09:46'},
    {airline: 'scx', time: '17:32:02'},
    {airline: 'nks', time: '09:43:43'},
    {airline: 'aal', time: '10:00:40'},
    {airline: 'vrd', time: '13:58:43'},
    {airline: 'aal', time: '17:15:52'},
    {airline: 'fft', time: '16:19:56'},
    {airline: 'asa', time: '16:32:43'},
    {airline: 'nks', time: '07:49:01'},
    {airline: 'ual', time: '12:06:06'},
    {airline: 'aal', time: '14:09:40'},
    {airline: 'dal', time: '11:20:38'},
    {airline: 'swa', time: '19:26:12'},
    {airline: 'ual', time: '03:50:52'},
    {airline: 'swa', time: '05:08:53'},
    {airline: 'swa', time: '05:14:55'},
    {airline: 'swa', time: '16:33:51'},
    {airline: 'ual', time: '16:09:13'},
    {airline: 'fft', time: '14:46:43'},
    {airline: 'swa', time: '06:38:31'},
    {airline: 'dal', time: '12:05:27'},
    {airline: 'jbu', time: '18:46:43'},
    {airline: 'swa', time: '10:18:11'},
    {airline: 'swa', time: '10:35:16'},
    {airline: 'dal', time: '11:04:06'},
    {airline: 'aal', time: '11:45:17'},
    {airline: 'swa', time: '19:18:28'},
    {airline: 'dal', time: '15:58:43'},
    {airline: 'dal', time: '02:30:30'},
    {airline: 'ual', time: '12:15:27'},
    {airline: 'fft', time: '20:54:47'},
    {airline: 'ual', time: '13:43:16'},
    {airline: 'swa', time: '20:16:57'},
    {airline: 'jbu', time: '14:40:46'},
    {airline: 'swa', time: '07:33:30'},
    {airline: 'vrd', time: '11:50:51'},
    {airline: 'fft', time: '11:29:00'},
    {airline: 'aal', time: '11:09:25'},
    {airline: 'aal', time: '15:38:00'},
    {airline: 'jbu', time: '12:02:29'},
    {airline: 'hal', time: '07:22:29'},
    {airline: 'ual', time: '05:51:26'},
    {airline: 'swa', time: '11:34:33'},
    {airline: 'fft', time: '10:55:20'},
    {airline: 'ual', time: '00:42:27'},
    {airline: 'dal', time: '17:27:33'},
    {airline: 'aal', time: '15:24:08'},
    {airline: 'aal', time: '12:05:35'},
    {airline: 'ual', time: '12:17:48'},
    {airline: 'fft', time: '16:26:52'},
    {airline: 'swa', time: '09:23:06'},
    {airline: 'swa', time: '16:25:26'},
    {airline: 'dal', time: '18:54:07'},
    {airline: 'hal', time: '02:02:29'},
    {airline: 'scx', time: '19:06:07'},
    {airline: 'fft', time: '11:57:08'},
    {airline: 'dal', time: '12:48:43'},
    {airline: 'aay', time: '13:24:27'},
    {airline: 'dal', time: '12:16:32'},
    {airline: 'nks', time: '03:00:18'},
    {airline: 'vrd', time: '14:12:05'},
    {airline: 'asa', time: '12:09:26'},
    {airline: 'aal', time: '06:52:47'},
    {airline: 'swa', time: '09:37:10'},
    {airline: 'swa', time: '07:33:19'},
    {airline: 'swa', time: '13:02:09'},
    {airline: 'ual', time: '06:08:39'},
    {airline: 'fft', time: '07:23:29'},
    {airline: 'fft', time: '18:34:43'},
    {airline: 'swa', time: '12:24:11'},
    {airline: 'swa', time: '06:48:50'},
    {airline: 'nks', time: '05:04:01'},
    {airline: 'nks', time: '19:24:21'},
    {airline: 'nks', time: '18:15:48'},
    {airline: 'jbu', time: '07:44:31'},
    {airline: 'dal', time: '11:16:05'},
    {airline: 'scx', time: '11:28:39'},
    {airline: 'dal', time: '08:39:53'},
    {airline: 'dal', time: '16:41:28'},
    {airline: 'dal', time: '15:56:19'},
    {airline: 'aal', time: '15:08:56'},
    {airline: 'swa', time: '15:55:08'},
    {airline: 'dal', time: '17:59:03'},
    {airline: 'nks', time: '18:17:52'},
    {airline: 'aal', time: '17:59:56'},
    {airline: 'ual', time: '13:09:29'},
    {airline: 'aal', time: '10:07:47'},
    {airline: 'ual', time: '13:53:30'},
    {airline: 'dal', time: '16:21:48'},
    {airline: 'fft', time: '17:08:40'},
    {airline: 'swa', time: '14:26:33'},
    {airline: 'ual', time: '05:09:23'},
    {airline: 'swa', time: '14:21:36'},
    {airline: 'ual', time: '09:14:35'},
    {airline: 'ual', time: '17:56:57'},
    {airline: 'swa', time: '12:34:58'},
    {airline: 'ual', time: '09:02:59'},
    {airline: 'dal', time: '11:36:16'},
    {airline: 'aal', time: '18:11:27'},
    {airline: 'swa', time: '18:29:54'},
    {airline: 'swa', time: '19:12:30'},
    {airline: 'fft', time: '08:59:45'},
    {airline: 'ual', time: '18:43:55'},
    {airline: 'ual', time: '09:11:49'},
    {airline: 'aal', time: '16:02:01'},
    {airline: 'ual', time: '10:41:30'},
    {airline: 'dal', time: '18:33:01'},
    {airline: 'ual', time: '12:27:55'},
    {airline: 'aal', time: '11:36:14'},
    {airline: 'aal', time: '16:37:21'},
    {airline: 'swa', time: '12:02:28'},
    {airline: 'aal', time: '06:25:30'},
    {airline: 'swa', time: '12:57:35'},
    {airline: 'dal', time: '14:31:55'},
    {airline: 'dal', time: '14:43:44'},
    {airline: 'dal', time: '13:28:29'},
    {airline: 'aal', time: '15:48:06'},
    {airline: 'vrd', time: '05:53:04'},
    {airline: 'aal', time: '17:42:10'},
    {airline: 'aal', time: '13:15:07'},
    {airline: 'swa', time: '11:31:31'},
    {airline: 'jbu', time: '19:41:21'},
    {airline: 'swa', time: '15:12:15'},
    {airline: 'fft', time: '18:42:31'},
    {airline: 'swa', time: '17:11:43'},
    {airline: 'swa', time: '11:27:07'},
    {airline: 'aal', time: '20:11:30'},
    {airline: 'fft', time: '15:30:10'},
    {airline: 'fft', time: '10:14:51'},
    {airline: 'aal', time: '16:37:23'},
    {airline: 'scx', time: '11:47:40'},
    {airline: 'dal', time: '12:54:00'},
    {airline: 'ual', time: '16:45:31'},
    {airline: 'ual', time: '15:50:00'},
    {airline: 'vrd', time: '14:53:14'},
    {airline: 'swa', time: '14:33:35'},
    {airline: 'fft', time: '18:19:36'},
    {airline: 'dal', time: '10:14:56'},
    {airline: 'ual', time: '09:25:28'},
    {airline: 'ual', time: '00:12:02'},
    {airline: 'ual', time: '08:32:23'},
    {airline: 'dal', time: '10:20:31'},
    {airline: 'aal', time: '12:02:24'},
    {airline: 'dal', time: '16:01:14'},
    {airline: 'aal', time: '10:37:52'},
    {airline: 'nks', time: '09:31:37'},
    {airline: 'jbu', time: '11:08:56'},
    {airline: 'swa', time: '10:11:08'},
    {airline: 'aal', time: '14:19:28'},
    {airline: 'aal', time: '14:51:34'},
    {airline: 'scx', time: '09:47:50'},
    {airline: 'nks', time: '18:17:11'},
    {airline: 'aal', time: '20:53:44'},
    {airline: 'aal', time: '19:43:16'},
    {airline: 'asa', time: '06:49:33'},
    {airline: 'jbu', time: '12:36:41'},
    {airline: 'swa', time: '22:03:57'},
    {airline: 'dal', time: '11:52:43'},
    {airline: 'aal', time: '16:23:14'},
    {airline: 'fft', time: '16:54:46'},
    {airline: 'ual', time: '12:16:52'},
    {airline: 'dal', time: '09:12:22'},
    {airline: 'dal', time: '07:52:31'},
    {airline: 'swa', time: '04:55:47'},
    {airline: 'ual', time: '13:36:29'},
    {airline: 'swa', time: '15:34:13'},
    {airline: 'aal', time: '12:52:01'},
    {airline: 'ual', time: '15:51:33'},
    {airline: 'dal', time: '02:37:07'},
    {airline: 'ual', time: '15:22:01'},
    {airline: 'ual', time: '10:27:25'},
    {airline: 'aal', time: '07:51:06'},
    {airline: 'dal', time: '09:44:04'},
    {airline: 'fft', time: '15:19:59'},
    {airline: 'nks', time: '10:06:54'},
    {airline: 'dal', time: '18:25:02'},
    {airline: 'aal', time: '16:16:21'},
    {airline: 'aal', time: '09:55:33'},
    {airline: 'ual', time: '12:53:15'},
    {airline: 'ual', time: '08:44:25'},
    {airline: 'swa', time: '14:10:22'},
    {airline: 'dal', time: '13:14:46'},
    {airline: 'aal', time: '10:43:54'},
    {airline: 'fft', time: '05:38:15'},
    {airline: 'swa', time: '16:28:44'},
    {airline: 'scx', time: '10:21:50'},
    {airline: 'dal', time: '09:06:17'},
    {airline: 'fft', time: '04:24:16'},
    {airline: 'ual', time: '10:58:14'},
    {airline: 'dal', time: '02:13:51'},
    {airline: 'ual', time: '13:09:32'},
    {airline: 'nks', time: '09:44:15'},
    {airline: 'aal', time: '10:33:51'},
    {airline: 'dal', time: '17:04:13'},
    {airline: 'dal', time: '17:11:51'},
    {airline: 'ual', time: '15:37:20'},
    {airline: 'aay', time: '14:13:44'},
    {airline: 'aal', time: '05:29:38'},
    {airline: 'aal', time: '12:06:36'},
    {airline: 'ual', time: '18:32:17'},
    {airline: 'swa', time: '11:06:26'},
    {airline: 'aal', time: '16:19:45'},
    {airline: 'dal', time: '13:08:17'},
    {airline: 'aal', time: '12:52:07'},
    {airline: 'nks', time: '09:30:30'},
    {airline: 'dal', time: '14:27:27'},
    {airline: 'aal', time: '15:46:52'},
    {airline: 'dal', time: '06:50:53'},
    {airline: 'ual', time: '13:00:20'},
    {airline: 'swa', time: '14:33:27'},
    {airline: 'hal', time: '09:51:44'},
    {airline: 'ual', time: '15:46:18'},
    {airline: 'ual', time: '22:42:53'},
    {airline: 'swa', time: '05:20:28'},
    {airline: 'dal', time: '12:23:44'},
    {airline: 'swa', time: '05:08:37'},
    {airline: 'jbu', time: '11:42:42'},
    {airline: 'fft', time: '10:25:22'},
    {airline: 'vrd', time: '17:36:11'},
    {airline: 'dal', time: '01:31:32'},
    {airline: 'aal', time: '09:50:07'},
    {airline: 'dal', time: '08:07:49'},
    {airline: 'fft', time: '16:19:42'},
    {airline: 'swa', time: '10:58:42'},
    {airline: 'aal', time: '15:30:02'},
    {airline: 'swa', time: '17:59:43'},
    {airline: 'aal', time: '16:35:43'},
    {airline: 'dal', time: '18:15:29'},
    {airline: 'vrd', time: '16:16:21'},
    {airline: 'fft', time: '18:16:31'},
    {airline: 'swa', time: '13:27:48'},
    {airline: 'fft', time: '16:17:09'},
    {airline: 'ual', time: '17:58:26'},
    {airline: 'aal', time: '15:53:20'},
    {airline: 'ual', time: '19:08:38'},
    {airline: 'nks', time: '07:15:39'},
    {airline: 'fft', time: '00:56:19'},
    {airline: 'jbu', time: '13:58:17'},
    {airline: 'aal', time: '11:49:33'},
    {airline: 'dal', time: '13:09:34'},
    {airline: 'aal', time: '20:31:05'},
    {airline: 'aal', time: '17:39:30'},
    {airline: 'aay', time: '23:37:24'},
    {airline: 'aal', time: '19:02:08'},
    {airline: 'hal', time: '13:51:32'},
    {airline: 'aal', time: '12:28:06'},
    {airline: 'swa', time: '05:06:33'},
    {airline: 'swa', time: '11:55:55'},
    {airline: 'dal', time: '09:08:01'},
    {airline: 'swa', time: '06:50:32'},
    {airline: 'ual', time: '12:54:05'},
    {airline: 'swa', time: '12:04:24'},
    {airline: 'aal', time: '19:10:19'},
    {airline: 'swa', time: '20:25:58'},
    {airline: 'asa', time: '17:13:07'},
    {airline: 'ual', time: '17:20:15'},
    {airline: 'dal', time: '16:39:05'},
    {airline: 'dal', time: '14:11:39'},
    {airline: 'ual', time: '05:26:26'},
    {airline: 'nks', time: '14:03:41'},
    {airline: 'hal', time: '18:40:57'},
    {airline: 'dal', time: '11:09:44'},
    {airline: 'aay', time: '15:42:51'},
    {airline: 'aal', time: '09:38:54'},
    {airline: 'ual', time: '14:12:28'},
    {airline: 'swa', time: '00:38:57'},
    {airline: 'ual', time: '11:24:31'},
    {airline: 'aal', time: '14:00:22'},
    {airline: 'aal', time: '06:57:52'},
    {airline: 'swa', time: '20:40:38'},
    {airline: 'vrd', time: '12:43:35'},
    {airline: 'swa', time: '11:38:07'},
    {airline: 'ual', time: '00:07:02'},
    {airline: 'jbu', time: '06:58:46'},
    {airline: 'ual', time: '11:27:12'},
    {airline: 'aal', time: '01:41:29'},
    {airline: 'aal', time: '17:09:23'},
    {airline: 'aay', time: '18:07:32'},
    {airline: 'asa', time: '11:52:01'},
    {airline: 'swa', time: '12:07:40'},
    {airline: 'jbu', time: '06:52:37'},
    {airline: 'nks', time: '16:24:30'},
    {airline: 'ual', time: '10:45:36'},
    {airline: 'swa', time: '13:27:23'},
    {airline: 'ual', time: '17:35:01'},
    {airline: 'ual', time: '14:08:38'},
    {airline: 'swa', time: '12:03:29'},
    {airline: 'fft', time: '06:15:31'},
    {airline: 'fft', time: '11:18:39'},
    {airline: 'swa', time: '09:04:02'},
    {airline: 'fft', time: '10:46:37'},
    {airline: 'jbu', time: '10:09:37'},
    {airline: 'ual', time: '15:14:45'},
    {airline: 'swa', time: '18:42:30'},
    {airline: 'ual', time: '16:41:45'},
    {airline: 'aal', time: '20:05:07'},
    {airline: 'dal', time: '13:07:18'},
    {airline: 'scx', time: '09:05:28'},
    {airline: 'dal', time: '15:38:50'},
    {airline: 'vrd', time: '09:47:24'},
    {airline: 'aal', time: '08:47:31'},
    {airline: 'aal', time: '11:36:29'},
    {airline: 'dal', time: '14:32:21'},
    {airline: 'nks', time: '23:46:53'},
    {airline: 'nks', time: '06:07:42'},
    {airline: 'jbu', time: '20:09:52'},
    {airline: 'swa', time: '11:42:54'},
    {airline: 'jbu', time: '12:59:12'},
    {airline: 'jbu', time: '16:12:49'},
    {airline: 'ual', time: '16:25:39'},
    {airline: 'nks', time: '18:18:51'},
    {airline: 'dal', time: '00:30:35'},
    {airline: 'aay', time: '18:30:31'},
    {airline: 'nks', time: '13:19:38'},
    {airline: 'swa', time: '15:59:58'},
    {airline: 'ual', time: '16:41:44'},
    {airline: 'swa', time: '09:47:47'},
    {airline: 'ual', time: '12:44:19'},
    {airline: 'dal', time: '12:57:41'},
    {airline: 'ual', time: '10:02:20'},
    {airline: 'fft', time: '12:30:27'},
    {airline: 'vrd', time: '09:52:05'},
    {airline: 'fft', time: '15:24:20'},
    {airline: 'aal', time: '12:44:07'},
    {airline: 'dal', time: '10:35:07'},
    {airline: 'ual', time: '18:44:22'},
    {airline: 'fft', time: '08:01:41'},
    {airline: 'swa', time: '17:59:29'},
    {airline: 'ual', time: '01:30:45'},
    {airline: 'jbu', time: '14:37:52'},
    {airline: 'aal', time: '14:00:40'},
    {airline: 'aal', time: '15:26:39'},
    {airline: 'nks', time: '09:21:54'},
    {airline: 'dal', time: '18:43:23'},
    {airline: 'aal', time: '15:14:16'},
    {airline: 'swa', time: '13:35:46'},
    {airline: 'asa', time: '19:46:14'},
    {airline: 'hal', time: '09:50:21'},
    {airline: 'dal', time: '10:13:14'},
    {airline: 'ual', time: '08:32:43'},
    {airline: 'nks', time: '20:55:57'},
    {airline: 'aal', time: '16:46:41'},
    {airline: 'fft', time: '01:02:28'},
    {airline: 'ual', time: '16:19:49'},
    {airline: 'nks', time: '12:13:54'},
    {airline: 'aal', time: '10:39:58'},
    {airline: 'jbu', time: '15:33:02'},
    {airline: 'hal', time: '12:48:16'},
    {airline: 'swa', time: '18:48:57'},
    {airline: 'swa', time: '11:41:07'},
    {airline: 'aal', time: '09:11:33'},
    {airline: 'dal', time: '20:20:19'},
    {airline: 'ual', time: '18:21:41'},
    {airline: 'fft', time: '16:59:47'},
    {airline: 'swa', time: '18:05:01'},
    {airline: 'asa', time: '13:49:25'},
    {airline: 'vrd', time: '13:00:59'},
    {airline: 'dal', time: '11:20:06'},
    {airline: 'aal', time: '12:43:57'},
    {airline: 'ual', time: '12:28:36'},
    {airline: 'ual', time: '16:46:14'},
    {airline: 'scx', time: '13:37:33'},
    {airline: 'swa', time: '15:17:56'},
    {airline: 'swa', time: '14:16:25'},
    {airline: 'swa', time: '17:57:25'},
    {airline: 'dal', time: '16:01:46'},
    {airline: 'hal', time: '14:07:42'},
    {airline: 'aal', time: '11:35:03'},
    {airline: 'dal', time: '20:14:15'},
    {airline: 'ual', time: '12:40:18'},
    {airline: 'nks', time: '12:18:13'},
    {airline: 'swa', time: '19:42:50'},
    {airline: 'aay', time: '05:48:23'},
    {airline: 'aal', time: '11:55:34'},
    {airline: 'dal', time: '23:25:57'},
    {airline: 'jbu', time: '12:35:44'},
    {airline: 'ual', time: '12:03:00'},
    {airline: 'swa', time: '10:24:52'},
    {airline: 'vrd', time: '15:22:40'},
    {airline: 'dal', time: '13:37:22'},
    {airline: 'hal', time: '09:14:55'},
    {airline: 'aay', time: '19:14:01'},
    {airline: 'ual', time: '09:53:41'},
    {airline: 'ual', time: '17:56:29'},
    {airline: 'swa', time: '14:06:19'},
    {airline: 'hal', time: '13:21:49'},
    {airline: 'fft', time: '17:32:01'},
    {airline: 'dal', time: '12:58:22'},
    {airline: 'dal', time: '09:41:23'},
    {airline: 'dal', time: '11:52:56'},
    {airline: 'dal', time: '18:46:16'},
    {airline: 'ual', time: '09:07:57'},
    {airline: 'jbu', time: '13:58:40'},
    {airline: 'aay', time: '18:09:12'},
    {airline: 'dal', time: '18:49:43'},
    {airline: 'aal', time: '11:36:55'},
    {airline: 'aal', time: '10:26:00'},
    {airline: 'aal', time: '09:36:14'},
    {airline: 'nks', time: '17:24:52'},
    {airline: 'swa', time: '10:25:41'},
    {airline: 'scx', time: '10:31:53'},
    {airline: 'aal', time: '09:13:36'},
    {airline: 'vrd', time: '06:34:51'},
    {airline: 'aal', time: '09:22:13'},
    {airline: 'dal', time: '07:19:22'},
    {airline: 'aal', time: '19:46:27'},
    {airline: 'swa', time: '19:59:28'},
    {airline: 'dal', time: '09:06:41'},
    {airline: 'dal', time: '04:15:48'},
    {airline: 'aal', time: '05:36:33'},
    {airline: 'aal', time: '16:19:37'},
    {airline: 'fft', time: '16:30:11'},
    {airline: 'ual', time: '06:17:36'},
    {airline: 'swa', time: '10:22:58'},
    {airline: 'dal', time: '07:34:11'},
    {airline: 'hal', time: '13:56:27'},
    {airline: 'dal', time: '18:10:30'},
    {airline: 'dal', time: '17:13:21'},
    {airline: 'ual', time: '12:38:51'},
    {airline: 'asa', time: '14:02:26'},
    {airline: 'dal', time: '18:03:22'},
    {airline: 'asa', time: '01:08:16'},
    {airline: 'swa', time: '12:19:14'},
    {airline: 'dal', time: '18:23:45'},
    {airline: 'dal', time: '05:45:46'},
    {airline: 'ual', time: '18:36:08'},
    {airline: 'aal', time: '14:11:24'},
    {airline: 'aay', time: '05:48:28'},
    {airline: 'dal', time: '09:46:25'},
    {airline: 'swa', time: '14:51:36'},
    {airline: 'swa', time: '10:02:11'},
    {airline: 'scx', time: '19:17:51'},
    {airline: 'aal', time: '16:34:38'},
    {airline: 'fft', time: '14:49:01'},
    {airline: 'swa', time: '17:23:49'},
    {airline: 'ual', time: '14:25:33'},
    {airline: 'ual', time: '13:20:23'},
    {airline: 'swa', time: '15:12:08'},
    {airline: 'nks', time: '13:03:48'},
    {airline: 'dal', time: '08:33:51'},
    {airline: 'swa', time: '14:54:12'},
    {airline: 'swa', time: '20:24:09'},
    {airline: 'dal', time: '12:10:13'},
    {airline: 'dal', time: '09:48:02'},
    {airline: 'aal', time: '15:08:52'},
    {airline: 'asa', time: '00:36:17'},
    {airline: 'swa', time: '20:25:40'},
    {airline: 'ual', time: '11:29:39'},
    {airline: 'aal', time: '17:37:53'},
    {airline: 'ual', time: '15:07:12'},
    {airline: 'swa', time: '13:30:45'},
    {airline: 'aal', time: '05:28:19'},
    {airline: 'aal', time: '11:17:16'},
    {airline: 'dal', time: '13:06:46'},
    {airline: 'aal', time: '13:13:45'},
    {airline: 'dal', time: '19:49:49'},
    {airline: 'dal', time: '14:17:31'},
    {airline: 'nks', time: '20:13:34'},
    {airline: 'fft', time: '05:33:34'},
    {airline: 'aal', time: '23:29:25'},
    {airline: 'ual', time: '18:41:02'},
    {airline: 'asa', time: '20:26:59'},
    {airline: 'dal', time: '09:41:05'},
    {airline: 'swa', time: '12:03:30'},
    {airline: 'swa', time: '17:38:35'},
    {airline: 'dal', time: '14:41:00'},
    {airline: 'ual', time: '11:20:28'},
    {airline: 'aal', time: '16:01:48'},
    {airline: 'hal', time: '18:35:07'},
    {airline: 'vrd', time: '19:50:55'},
    {airline: 'dal', time: '11:29:47'},
    {airline: 'jbu', time: '11:24:51'},
    {airline: 'dal', time: '15:04:05'},
    {airline: 'dal', time: '14:00:24'},
    {airline: 'jbu', time: '20:26:26'},
    {airline: 'ual', time: '14:33:02'},
    {airline: 'swa', time: '06:11:16'},
    {airline: 'swa', time: '16:02:49'},
    {airline: 'vrd', time: '11:35:12'},
    {airline: 'aal', time: '12:22:49'},
    {airline: 'swa', time: '06:05:54'},
    {airline: 'jbu', time: '13:05:09'},
    {airline: 'swa', time: '17:09:47'},
    {airline: 'nks', time: '11:11:49'},
    {airline: 'asa', time: '07:44:07'},
    {airline: 'aal', time: '13:12:15'},
    {airline: 'aal', time: '15:31:15'},
    {airline: 'asa', time: '20:49:42'},
    {airline: 'swa', time: '14:32:22'},
    {airline: 'aal', time: '11:02:44'},
    {airline: 'ual', time: '18:47:45'},
    {airline: 'ual', time: '09:09:42'},
    {airline: 'swa', time: '16:33:22'},
    {airline: 'ual', time: '16:56:08'},
    {airline: 'dal', time: '03:06:53'},
    {airline: 'ual', time: '17:45:55'},
    {airline: 'nks', time: '14:26:43'},
    {airline: 'vrd', time: '12:14:11'},
    {airline: 'asa', time: '13:52:19'},
    {airline: 'swa', time: '05:52:00'},
    {airline: 'vrd', time: '12:43:16'},
    {airline: 'nks', time: '17:43:15'},
    {airline: 'aal', time: '08:27:08'},
    {airline: 'nks', time: '16:13:36'},
    {airline: 'ual', time: '17:06:32'},
    {airline: 'ual', time: '16:45:45'},
    {airline: 'swa', time: '12:35:19'},
    {airline: 'fft', time: '12:10:33'},
    {airline: 'aal', time: '18:51:47'},
    {airline: 'swa', time: '17:56:26'},
    {airline: 'ual', time: '03:24:07'},
    {airline: 'ual', time: '15:31:32'},
    {airline: 'swa', time: '08:18:36'},
    {airline: 'swa', time: '18:04:56'},
    {airline: 'aal', time: '08:55:42'},
    {airline: 'jbu', time: '07:51:15'},
    {airline: 'aal', time: '13:24:46'},
    {airline: 'ual', time: '10:25:13'},
    {airline: 'fft', time: '12:14:40'},
    {airline: 'ual', time: '14:40:51'},
    {airline: 'aal', time: '12:10:07'},
    {airline: 'swa', time: '16:57:04'},
    {airline: 'ual', time: '06:57:54'},
    {airline: 'ual', time: '11:21:13'},
    {airline: 'ual', time: '15:18:20'},
    {airline: 'ual', time: '21:45:23'},
    {airline: 'nks', time: '05:01:31'},
    {airline: 'dal', time: '14:50:29'},
    {airline: 'jbu', time: '16:47:57'},
    {airline: 'aal', time: '13:09:07'},
    {airline: 'swa', time: '11:12:50'},
    {airline: 'jbu', time: '09:31:59'},
    {airline: 'swa', time: '11:05:49'},
    {airline: 'swa', time: '10:06:00'},
    {airline: 'ual', time: '18:11:39'},
    {airline: 'hal', time: '14:09:38'},
    {airline: 'swa', time: '13:06:16'},
    {airline: 'ual', time: '08:57:33'},
    {airline: 'dal', time: '16:30:06'},
    {airline: 'aal', time: '21:54:28'},
    {airline: 'ual', time: '10:58:37'},
    {airline: 'swa', time: '05:21:56'},
    {airline: 'aal', time: '20:54:36'},
    {airline: 'ual', time: '16:10:01'},
    {airline: 'swa', time: '17:51:03'},
    {airline: 'swa', time: '17:21:24'},
    {airline: 'dal', time: '11:18:32'},
    {airline: 'vrd', time: '16:10:11'},
    {airline: 'ual', time: '13:15:12'},
    {airline: 'dal', time: '13:27:25'},
    {airline: 'ual', time: '16:24:11'},
    {airline: 'ual', time: '14:06:03'},
    {airline: 'fft', time: '12:02:13'},
    {airline: 'aal', time: '07:21:02'},
    {airline: 'swa', time: '14:42:18'},
    {airline: 'aay', time: '06:36:43'},
    {airline: 'scx', time: '18:20:13'},
    {airline: 'jbu', time: '08:16:15'},
    {airline: 'fft', time: '10:07:47'},
    {airline: 'swa', time: '00:27:18'},
    {airline: 'swa', time: '10:08:22'},
    {airline: 'scx', time: '14:30:39'},
    {airline: 'swa', time: '19:21:10'},
    {airline: 'dal', time: '15:18:01'},
    {airline: 'dal', time: '11:01:34'},
    {airline: 'swa', time: '18:20:27'},
    {airline: 'fft', time: '16:29:28'},
    {airline: 'fft', time: '11:10:59'},
    {airline: 'scx', time: '11:57:26'},
    {airline: 'ual', time: '04:42:00'},
    {airline: 'hal', time: '16:06:55'},
    {airline: 'swa', time: '16:30:26'},
    {airline: 'dal', time: '11:59:44'},
    {airline: 'dal', time: '08:04:22'},
    {airline: 'ual', time: '08:48:19'},
    {airline: 'jbu', time: '17:18:17'},
    {airline: 'ual', time: '09:26:04'},
    {airline: 'dal', time: '16:16:11'},
    {airline: 'dal', time: '14:11:24'},
    {airline: 'aay', time: '18:29:48'},
    {airline: 'swa', time: '22:45:24'},
    {airline: 'swa', time: '08:05:50'},
    {airline: 'asa', time: '18:51:29'},
    {airline: 'dal', time: '12:21:14'},
    {airline: 'swa', time: '08:52:00'},
    {airline: 'ual', time: '18:17:29'},
    {airline: 'ual', time: '10:07:30'},
    {airline: 'aal', time: '11:17:34'},
    {airline: 'nks', time: '17:51:07'},
    {airline: 'hal', time: '15:44:52'},
    {airline: 'aal', time: '09:19:08'},
    {airline: 'ual', time: '11:58:45'},
    {airline: 'swa', time: '12:06:44'},
    {airline: 'dal', time: '13:07:26'},
    {airline: 'aal', time: '16:47:19'},
    {airline: 'scx', time: '15:26:13'},
    {airline: 'swa', time: '07:31:56'},
    {airline: 'aal', time: '02:41:19'},
    {airline: 'swa', time: '13:34:37'},
    {airline: 'ual', time: '14:17:52'},
    {airline: 'aal', time: '18:40:56'},
    {airline: 'aal', time: '12:33:06'},
    {airline: 'dal', time: '14:55:14'},
    {airline: 'scx', time: '11:47:09'},
    {airline: 'swa', time: '13:35:12'},
    {airline: 'ual', time: '13:54:36'},
    {airline: 'dal', time: '14:21:11'},
    {airline: 'swa', time: '14:15:04'},
    {airline: 'aay', time: '11:52:09'},
    {airline: 'aal', time: '14:34:19'},
    {airline: 'ual', time: '11:06:49'},
    {airline: 'ual', time: '16:04:06'},
    {airline: 'jbu', time: '05:28:32'},
    {airline: 'aal', time: '08:00:08'},
    {airline: 'jbu', time: '13:14:22'},
    {airline: 'nks', time: '12:06:40'},
    {airline: 'ual', time: '18:14:48'},
    {airline: 'aal', time: '18:43:51'},
    {airline: 'ual', time: '15:38:59'},
    {airline: 'dal', time: '11:25:13'},
    {airline: 'swa', time: '18:26:40'},
    {airline: 'vrd', time: '05:33:14'},
    {airline: 'jbu', time: '12:47:26'},
    {airline: 'swa', time: '19:24:33'},
    {airline: 'jbu', time: '14:11:03'},
    {airline: 'hal', time: '18:14:59'},
    {airline: 'vrd', time: '17:15:40'},
    {airline: 'swa', time: '05:46:50'},
    {airline: 'dal', time: '03:02:46'},
    {airline: 'swa', time: '17:40:40'},
    {airline: 'ual', time: '02:21:43'},
    {airline: 'swa', time: '17:01:27'},
    {airline: 'dal', time: '16:58:07'},
    {airline: 'dal', time: '13:10:13'},
    {airline: 'nks', time: '14:15:25'},
    {airline: 'aal', time: '07:12:31'},
    {airline: 'asa', time: '17:04:33'},
    {airline: 'aal', time: '09:21:37'},
    {airline: 'ual', time: '15:49:34'},
    {airline: 'aal', time: '10:56:25'},
    {airline: 'dal', time: '18:25:34'},
    {airline: 'aal', time: '18:38:18'},
    {airline: 'aal', time: '16:08:05'},
    {airline: 'ual', time: '13:40:57'},
    {airline: 'aal', time: '19:49:19'},
    {airline: 'swa', time: '12:18:07'},
    {airline: 'fft', time: '14:04:14'},
    {airline: 'jbu', time: '07:00:34'},
    {airline: 'swa', time: '07:15:35'},
    {airline: 'ual', time: '18:13:35'},
    {airline: 'aal', time: '20:24:26'},
    {airline: 'ual', time: '14:08:05'},
    {airline: 'ual', time: '18:04:33'},
    {airline: 'aay', time: '19:37:07'},
    {airline: 'dal', time: '17:12:58'},
    {airline: 'dal', time: '14:29:25'},
    {airline: 'ual', time: '02:37:00'},
    {airline: 'swa', time: '12:01:15'},
    {airline: 'ual', time: '19:29:27'},
    {airline: 'ual', time: '13:57:53'},
    {airline: 'dal', time: '11:28:44'},
    {airline: 'jbu', time: '13:54:15'},
    {airline: 'hal', time: '14:42:36'},
    {airline: 'ual', time: '20:38:57'},
    {airline: 'swa', time: '17:36:58'},
    {airline: 'aal', time: '16:05:07'},
    {airline: 'swa', time: '23:13:53'},
    {airline: 'aal', time: '16:59:37'},
    {airline: 'nks', time: '17:12:27'},
    {airline: 'dal', time: '04:21:17'},
    {airline: 'dal', time: '20:56:23'},
    {airline: 'nks', time: '03:58:19'},
    {airline: 'aal', time: '11:07:00'},
    {airline: 'aay', time: '16:44:39'},
    {airline: 'ual', time: '12:35:10'},
    {airline: 'aal', time: '10:44:50'},
    {airline: 'dal', time: '10:05:51'},
    {airline: 'swa', time: '21:15:24'},
    {airline: 'fft', time: '18:34:29'},
    {airline: 'dal', time: '15:10:54'},
    {airline: 'swa', time: '12:23:01'},
    {airline: 'aal', time: '17:12:43'},
    {airline: 'aal', time: '13:25:40'},
    {airline: 'ual', time: '18:23:32'},
    {airline: 'ual', time: '10:06:40'},
    {airline: 'aal', time: '16:18:17'},
    {airline: 'dal', time: '07:38:33'},
    {airline: 'dal', time: '16:48:38'},
    {airline: 'ual', time: '10:36:23'},
    {airline: 'dal', time: '12:07:29'},
    {airline: 'ual', time: '12:02:35'},
    {airline: 'swa', time: '18:12:28'},
    {airline: 'dal', time: '20:15:22'},
    {airline: 'ual', time: '18:46:16'},
    {airline: 'dal', time: '18:53:46'},
    {airline: 'ual', time: '15:41:36'},
    {airline: 'dal', time: '09:07:01'},
    {airline: 'aal', time: '14:25:04'},
    {airline: 'vrd', time: '09:18:48'},
    {airline: 'dal', time: '21:28:08'},
    {airline: 'aay', time: '16:47:12'},
    {airline: 'vrd', time: '10:59:04'},
    {airline: 'fft', time: '11:00:47'},
    {airline: 'ual', time: '10:07:45'},
    {airline: 'ual', time: '11:28:21'},
    {airline: 'ual', time: '15:59:42'},
    {airline: 'ual', time: '03:21:23'},
    {airline: 'nks', time: '17:19:24'},
    {airline: 'ual', time: '10:53:36'},
    {airline: 'dal', time: '13:27:32'},
    {airline: 'dal', time: '19:23:52'},
    {airline: 'ual', time: '12:46:52'},
    {airline: 'ual', time: '23:24:37'},
    {airline: 'swa', time: '05:12:59'},
    {airline: 'ual', time: '05:24:04'},
    {airline: 'swa', time: '10:13:28'},
    {airline: 'jbu', time: '10:39:47'},
    {airline: 'fft', time: '17:22:19'},
    {airline: 'swa', time: '17:46:09'},
    {airline: 'swa', time: '18:21:12'},
    {airline: 'aal', time: '17:24:00'},
    {airline: 'aal', time: '07:24:25'},
    {airline: 'nks', time: '13:36:28'},
    {airline: 'aal', time: '14:04:15'},
    {airline: 'dal', time: '07:01:32'},
    {airline: 'ual', time: '05:41:48'},
    {airline: 'aal', time: '13:20:26'},
    {airline: 'swa', time: '18:08:40'},
    {airline: 'aay', time: '15:41:04'},
    {airline: 'ual', time: '00:56:28'},
    {airline: 'swa', time: '20:34:57'},
    {airline: 'swa', time: '14:16:27'},
    {airline: 'ual', time: '16:51:32'},
    {airline: 'dal', time: '16:03:45'},
    {airline: 'ual', time: '19:24:11'},
    {airline: 'jbu', time: '13:44:07'},
    {airline: 'aal', time: '16:34:36'},
    {airline: 'swa', time: '17:17:22'},
    {airline: 'aal', time: '13:46:01'},
    {airline: 'ual', time: '05:09:18'},
    null,
    {airline: 'aay', time: '17:00:53'},
    {airline: 'swa', time: '20:16:02'},
    {airline: 'swa', time: '11:58:39'},
    {airline: 'swa', time: '17:18:03'},
    {airline: 'ual', time: '15:46:59'},
    {airline: 'hal', time: '12:31:34'},
    {airline: 'dal', time: '12:54:47'},
    {airline: 'ual', time: '06:58:46'},
    {airline: 'swa', time: '14:26:16'},
    {airline: 'aal', time: '09:50:00'},
    {airline: 'jbu', time: '16:26:32'},
    {airline: 'ual', time: '09:56:45'},
    {airline: 'swa', time: '15:08:53'},
    {airline: 'swa', time: '14:59:31'},
    {airline: 'ual', time: '13:32:50'},
    {airline: 'swa', time: '11:51:20'},
    {airline: 'dal', time: '03:16:23'},
    {airline: 'swa', time: '13:52:45'},
    {airline: 'ual', time: '18:28:17'},
    {airline: 'swa', time: '12:45:50'},
    {airline: 'ual', time: '17:46:40'},
    {airline: 'scx', time: '06:35:37'},
    {airline: 'aal', time: '13:15:41'},
    {airline: 'ual', time: '14:36:03'},
    {airline: 'nks', time: '10:15:36'},
    {airline: 'scx', time: '16:06:04'},
    {airline: 'fft', time: '14:27:22'},
    {airline: 'asa', time: '12:55:31'},
    {airline: 'swa', time: '13:10:09'},
    {airline: 'fft', time: '15:46:15'},
    {airline: 'dal', time: '12:57:45'},
    {airline: 'ual', time: '17:42:24'},
    {airline: 'dal', time: '16:36:49'},
    {airline: 'nks', time: '17:12:08'},
    {airline: 'jbu', time: '05:52:07'},
    {airline: 'aal', time: '15:24:24'},
    {airline: 'swa', time: '16:34:38'},
    {airline: 'swa', time: '13:12:50'},
    {airline: 'aal', time: '03:34:28'},
    {airline: 'asa', time: '13:07:01'},
    {airline: 'aal', time: '13:47:23'},
    {airline: 'ual', time: '17:21:46'},
    {airline: 'ual', time: '14:51:42'},
    {airline: 'swa', time: '05:43:55'},
    {airline: 'swa', time: '14:42:14'},
    {airline: 'fft', time: '16:57:21'},
    {airline: 'nks', time: '16:36:57'},
    {airline: 'aal', time: '07:01:55'},
    {airline: 'swa', time: '13:28:28'},
    {airline: 'swa', time: '16:42:34'},
    {airline: 'nks', time: '18:59:32'},
    {airline: 'ual', time: '11:18:04'},
    {airline: 'dal', time: '10:30:46'},
    {airline: 'aal', time: '14:26:23'},
    {airline: 'asa', time: '10:05:49'},
    {airline: 'scx', time: '17:52:11'},
    {airline: 'dal', time: '17:56:24'},
    {airline: 'ual', time: '15:35:58'},
    {airline: 'ual', time: '07:37:58'},
    {airline: 'aal', time: '06:03:44'},
    {airline: 'swa', time: '05:11:03'},
    {airline: 'ual', time: '18:41:16'},
    {airline: 'swa', time: '17:21:01'},
    {airline: 'nks', time: '12:51:36'},
    {airline: 'dal', time: '16:59:20'},
    {airline: 'scx', time: '10:28:19'},
    {airline: 'jbu', time: '06:34:35'},
    {airline: 'ual', time: '19:17:25'},
    {airline: 'aal', time: '10:08:54'},
    {airline: 'vrd', time: '17:20:07'},
    {airline: 'swa', time: '05:08:26'},
    {airline: 'aal', time: '11:30:46'},
    {airline: 'ual', time: '10:47:48'},
    {airline: 'ual', time: '09:50:50'},
    {airline: 'swa', time: '08:18:06'},
    {airline: 'dal', time: '19:46:46'},
    {airline: 'aay', time: '19:48:10'},
    {airline: 'dal', time: '16:34:40'},
    {airline: 'aal', time: '13:41:39'},
    {airline: 'swa', time: '04:57:48'},
    {airline: 'fft', time: '11:09:05'},
    {airline: 'dal', time: '15:35:27'},
    {airline: 'swa', time: '17:29:03'},
    {airline: 'jbu', time: '13:31:42'},
    {airline: 'fft', time: '08:35:01'},
    {airline: 'nks', time: '19:23:54'},
    {airline: 'dal', time: '18:57:16'},
    {airline: 'aal', time: '09:01:56'},
    {airline: 'jbu', time: '17:00:22'},
    {airline: 'ual', time: '17:49:25'},
    {airline: 'aal', time: '14:59:12'},
    {airline: 'vrd', time: '11:38:41'},
    {airline: 'jbu', time: '15:15:35'},
    {airline: 'swa', time: '17:29:09'},
    {airline: 'swa', time: '11:08:48'},
    {airline: 'ual', time: '17:23:35'},
    {airline: 'fft', time: '11:43:39'},
    {airline: 'dal', time: '09:44:27'},
    {airline: 'dal', time: '09:14:44'},
    {airline: 'jbu', time: '19:29:19'},
    {airline: 'dal', time: '13:20:28'},
    {airline: 'ual', time: '17:38:46'},
    {airline: 'fft', time: '09:06:40'},
    {airline: 'dal', time: '16:20:47'},
    {airline: 'swa', time: '11:45:37'},
    {airline: 'aal', time: '11:04:13'},
    {airline: 'nks', time: '03:20:24'},
    {airline: 'fft', time: '15:30:17'},
    {airline: 'swa', time: '23:39:35'},
    {airline: 'nks', time: '05:36:22'},
    {airline: 'swa', time: '18:22:12'},
    {airline: 'swa', time: '15:30:50'},
    {airline: 'scx', time: '16:15:39'},
    {airline: 'nks', time: '11:04:46'},
    {airline: 'dal', time: '15:57:31'},
    {airline: 'aay', time: '13:04:40'},
    {airline: 'jbu', time: '16:37:02'},
    {airline: 'ual', time: '18:04:17'},
    {airline: 'swa', time: '06:00:28'},
    {airline: 'jbu', time: '13:54:47'},
    {airline: 'swa', time: '16:54:44'},
    {airline: 'swa', time: '20:23:49'},
    {airline: 'asa', time: '04:50:46'},
    {airline: 'vrd', time: '15:43:32'},
    {airline: 'hal', time: '11:46:40'},
    {airline: 'aal', time: '13:59:04'},
    {airline: 'scx', time: '11:46:12'},
    {airline: 'asa', time: '09:32:39'},
    {airline: 'aal', time: '09:12:52'},
    {airline: 'aal', time: '11:09:35'},
    {airline: 'dal', time: '10:22:01'},
    {airline: 'ual', time: '09:51:37'},
    {airline: 'ual', time: '09:38:55'},
    {airline: 'swa', time: '18:21:39'},
    {airline: 'aal', time: '13:31:55'},
    {airline: 'fft', time: '15:23:58'},
    {airline: 'dal', time: '12:54:09'},
    {airline: 'jbu', time: '09:34:47'},
    {airline: 'dal', time: '16:43:45'},
    {airline: 'ual', time: '18:37:50'},
    {airline: 'vrd', time: '01:01:01'},
    {airline: 'jbu', time: '10:28:25'},
    {airline: 'aal', time: '09:43:02'},
    {airline: 'ual', time: '10:48:51'},
    {airline: 'swa', time: '11:11:18'},
    {airline: 'swa', time: '17:58:57'},
    {airline: 'fft', time: '12:09:47'},
    {airline: 'dal', time: '19:40:48'},
    {airline: 'nks', time: '14:42:29'},
    {airline: 'ual', time: '11:09:31'},
    {airline: 'nks', time: '19:26:16'},
    {airline: 'aal', time: '18:09:01'},
    {airline: 'fft', time: '13:03:54'},
    {airline: 'ual', time: '13:02:54'},
    {airline: 'swa', time: '15:55:26'},
    {airline: 'ual', time: '15:26:22'},
    {airline: 'aal', time: '10:15:31'},
    {airline: 'dal', time: '19:39:09'},
    {airline: 'aal', time: '09:02:20'},
    {airline: 'swa', time: '18:17:37'},
    {airline: 'hal', time: '09:42:36'},
    {airline: 'aay', time: '12:06:00'},
    {airline: 'dal', time: '16:06:26'},
    {airline: 'aal', time: '07:24:37'},
    {airline: 'jbu', time: '14:18:55'},
    {airline: 'dal', time: '17:36:49'},
    {airline: 'dal', time: '16:37:39'},
    {airline: 'swa', time: '00:15:35'},
    {airline: 'ual', time: '18:44:11'},
    {airline: 'aal', time: '18:59:49'},
    {airline: 'swa', time: '11:24:29'},
    {airline: 'jbu', time: '14:34:38'},
    {airline: 'jbu', time: '18:49:53'},
    {airline: 'ual', time: '13:35:46'},
    {airline: 'dal', time: '10:49:28'},
    {airline: 'aal', time: '20:18:17'},
    {airline: 'dal', time: '16:40:49'},
    {airline: 'vrd', time: '20:56:80'},
    {airline: 'swa', time: '15:27:59'},
    {airline: 'ual', time: '19:25:34'},
    {airline: 'swa', time: '06:20:45'},
    {airline: 'ual', time: '15:52:51'},
    {airline: 'aal', time: '09:08:34'},
    {airline: 'ual', time: '10:51:48'},
    {airline: 'aal', time: '18:05:53'},
    {airline: 'fft', time: '18:26:53'},
    {airline: 'ual', time: '20:36:11'},
    {airline: 'ual', time: '19:49:53'},
    {airline: 'aal', time: '10:26:01'},
    {airline: 'ual', time: '11:39:15'},
    {airline: 'ual', time: '17:17:33'},
    {airline: 'swa', time: '19:07:54'},
    {airline: 'jbu', time: '15:02:54'},
    {airline: 'ual', time: '22:51:42'},
    {airline: 'swa', time: '13:28:46'},
    {airline: 'swa', time: '12:38:57'},
    {airline: 'aal', time: '09:13:21'},
    {airline: 'swa', time: '02:53:56'},
    {airline: 'aay', time: '13:45:11'},
    {airline: 'aal', time: '18:43:32'},
    {airline: 'swa', time: '14:27:47'},
    {airline: 'swa', time: '11:26:12'},
    {airline: 'swa', time: '12:47:45'},
    {airline: 'dal', time: '07:36:51'},
    {airline: 'scx', time: '12:12:16'},
    {airline: 'dal', time: '17:53:35'},
    {airline: 'dal', time: '05:22:46'},
    {airline: 'scx', time: '14:05:46'},
    {airline: 'swa', time: '10:26:00'},
    {airline: 'aal', time: '16:11:23'},
    {airline: 'dal', time: '22:01:01'},
    {airline: 'jbu', time: '10:46:57'},
    {airline: 'ual', time: '10:38:39'},
    {airline: 'dal', time: '16:20:54'},
    {airline: 'swa', time: '16:32:47'},
    {airline: 'dal', time: '13:24:00'},
    {airline: 'aal', time: '11:08:53'},
    {airline: 'dal', time: '12:21:46'},
    {airline: 'aal', time: '18:28:26'},
    {airline: 'aal', time: '12:32:51'},
    {airline: 'ual', time: '15:23:50'},
    {airline: 'nks', time: '09:46:08'},
    {airline: 'nks', time: '10:32:53'},
    {airline: 'aal', time: '08:18:22'},
    {airline: 'swa', time: '11:04:49'},
    {airline: 'fft', time: '12:48:06'},
    {airline: 'aal', time: '19:30:48'},
    {airline: 'aal', time: '18:21:06'},
    {airline: 'aay', time: '19:22:29'},
    {airline: 'ual', time: '10:27:19'},
    {airline: 'aal', time: '13:39:18'},
    {airline: 'aal', time: '10:32:18'},
    {airline: 'swa', time: '03:04:12'},
    {airline: 'aal', time: '12:23:53'},
    {airline: 'aal', time: '14:32:54'},
    {airline: 'aal', time: '10:55:34'},
    {airline: 'ual', time: '05:14:05'},
    {airline: 'aal', time: '17:09:16'},
    {airline: 'swa', time: '18:03:10'},
    {airline: 'swa', time: '17:43:43'},
    {airline: 'jbu', time: '10:26:40'},
    {airline: 'aal', time: '04:08:41'},
    {airline: 'ual', time: '16:44:06'},
    {airline: 'aal', time: '09:19:31'},
    {airline: 'swa', time: '07:45:13'},
    {airline: 'ual', time: '19:41:01'},
    {airline: 'dal', time: '17:02:26'},
    {airline: 'ual', time: '22:05:24'},
    {airline: 'ual', time: '20:04:47'},
    {airline: 'nks', time: '13:56:13'},
    {airline: 'ual', time: '12:45:53'},
    {airline: 'ual', time: '14:27:48'},
    {airline: 'ual', time: '09:12:15'},
    {airline: 'aal', time: '10:57:34'},
    {airline: 'ual', time: '18:12:37'},
    {airline: 'aal', time: '18:47:50'},
    {airline: 'swa', time: '12:32:36'},
    {airline: 'swa', time: '14:39:12'},
    {airline: 'ual', time: '18:31:55'},
    {airline: 'aal', time: '12:35:38'},
    {airline: 'aal', time: '17:58:26'},
    {airline: 'nks', time: '19:02:37'},
    {airline: 'nks', time: '11:46:48'},
    {airline: 'nks', time: '06:33:19'},
    {airline: 'ual', time: '01:48:23'},
    {airline: 'swa', time: '05:41:57'},
    {airline: 'ual', time: '13:24:53'},
    {airline: 'nks', time: '19:26:22'},
    {airline: 'aal', time: '18:31:13'},
    {airline: 'nks', time: '16:52:23'},
    {airline: 'swa', time: '04:09:16'},
    {airline: 'aal', time: '20:37:18'},
    {airline: 'ual', time: '14:07:32'},
    {airline: 'ual', time: '07:12:58'},
    {airline: 'dal', time: '17:07:39'},
    {airline: 'dal', time: '18:19:29'},
    {airline: 'aal', time: '16:02:20'},
    {airline: 'dal', time: '19:26:55'},
    {airline: 'swa', time: '17:58:00'},
    {airline: 'aal', time: '13:24:30'},
    {airline: 'ual', time: '13:51:16'},
    {airline: 'dal', time: '08:43:43'},
    {airline: 'nks', time: '03:00:18'},
    {airline: 'aal', time: '11:36:22'},
    {airline: 'swa', time: '07:21:55'},
    {airline: 'jbu', time: '09:46:42'},
    {airline: 'jbu', time: '17:16:56'},
    {airline: 'aal', time: '16:17:26'},
    {airline: 'aal', time: '13:20:43'},
    {airline: 'swa', time: '12:41:45'},
    {airline: 'aal', time: '11:46:10'},
    {airline: 'fft', time: '12:25:16'},
    {airline: 'dal', time: '12:28:37'},
    {airline: 'scx', time: '17:07:55'},
    {airline: 'swa', time: '14:26:59'},
    {airline: 'dal', time: '12:05:16'},
    {airline: 'swa', time: '10:24:04'},
    {airline: 'ual', time: '14:26:24'},
    {airline: 'dal', time: '14:19:39'},
    {airline: 'vrd', time: '08:16:26'},
    {airline: 'jbu', time: '13:32:34'},
    {airline: 'ual', time: '17:25:22'},
    {airline: 'dal', time: '02:11:12'},
    {airline: 'swa', time: '03:24:46'},
    {airline: 'aal', time: '09:06:23'},
    {airline: 'swa', time: '18:02:43'},
    {airline: 'swa', time: '17:36:58'},
    {airline: 'ual', time: '09:55:23'},
    {airline: 'fft', time: '13:39:07'},
    {airline: 'dal', time: '14:28:33'},
    {airline: 'dal', time: '14:16:03'},
    {airline: 'dal', time: '07:00:35'},
    {airline: 'nks', time: '15:11:51'},
    {airline: 'ual', time: '09:01:42'},
    {airline: 'aal', time: '06:17:46'},
    {airline: 'swa', time: '15:37:19'},
    {airline: 'nks', time: '12:55:30'},
    {airline: 'dal', time: '16:51:35'},
    {airline: 'ual', time: '16:02:24'},
    {airline: 'swa', time: '09:31:07'},
    {airline: 'swa', time: '13:48:36'},
    {airline: 'ual', time: '10:27:01'},
    {airline: 'swa', time: '11:27:08'},
    {airline: 'aal', time: '13:29:03'},
    {airline: 'dal', time: '11:46:22'},
    {airline: 'jbu', time: '17:55:47'},
    {airline: 'swa', time: '05:30:50'},
    {airline: 'ual', time: '18:04:37'},
    {airline: 'ual', time: '19:19:02'},
    {airline: 'aal', time: '16:19:53'},
    {airline: 'dal', time: '13:45:14'},
    {airline: 'dal', time: '19:59:38'},
    {airline: 'fft', time: '01:14:07'},
    {airline: 'swa', time: '15:31:28'},
    {airline: 'aal', time: '22:53:43'},
    {airline: 'dal', time: '17:41:36'},
    {airline: 'swa', time: '17:55:03'},
    {airline: 'fft', time: '10:26:18'},
    {airline: 'dal', time: '06:16:15'},
    {airline: 'aal', time: '20:23:46'},
    {airline: 'swa', time: '19:15:47'},
    {airline: 'aay', time: '18:01:19'},
    {airline: 'swa', time: '14:19:04'},
    {airline: 'asa', time: '06:13:56'},
    {airline: 'dal', time: '16:30:46'},
    {airline: 'aal', time: '07:00:49'},
    {airline: 'swa', time: '03:23:54'},
    {airline: 'dal', time: '07:47:13'},
    {airline: 'jbu', time: '15:01:53'},
    {airline: 'swa', time: '08:32:43'},
    {airline: 'dal', time: '20:45:50'},
    {airline: 'aal', time: '13:50:24'},
    {airline: 'jbu', time: '16:26:27'},
    {airline: 'ual', time: '13:40:40'},
    {airline: 'aal', time: '12:39:43'},
    {airline: 'ual', time: '09:14:39'},
    {airline: 'dal', time: '17:56:19'},
    {airline: 'jbu', time: '05:23:16'},
    {airline: 'asa', time: '13:36:00'},
    {airline: 'aal', time: '16:37:20'},
    {airline: 'nks', time: '09:49:34'},
    {airline: 'swa', time: '13:29:21'},
    {airline: 'dal', time: '18:48:44'},
    {airline: 'vrd', time: '20:30:43'},
    {airline: 'ual', time: '19:35:49'},
    {airline: 'fft', time: '23:21:42'},
    {airline: 'nks', time: '16:25:09'},
    {airline: 'jbu', time: '11:07:28'},
    {airline: 'aal', time: '03:01:20'},
    {airline: 'dal', time: '05:38:56'},
    {airline: 'swa', time: '00:43:43'},
    {airline: 'aal', time: '10:52:55'},
    {airline: 'swa', time: '09:56:05'},
    {airline: 'aal', time: '15:32:55'},
    {airline: 'dal', time: '11:14:53'},
    {airline: 'hal', time: '15:45:17'},
    {airline: 'dal', time: '18:30:54'},
    {airline: 'jbu', time: '08:48:01'},
    {airline: 'dal', time: '17:23:24'},
    {airline: 'dal', time: '12:15:30'},
    {airline: 'swa', time: '19:07:10'},
    {airline: 'aal', time: '18:43:46'},
    {airline: 'ual', time: '11:33:31'},
    {airline: 'swa', time: '10:55:54'},
    {airline: 'dal', time: '14:05:39'},
    {airline: 'ual', time: '20:43:30'},
    {airline: 'nks', time: '16:07:09'},
    {airline: 'dal', time: '15:48:49'},
    {airline: 'aal', time: '08:38:00'},
    {airline: 'swa', time: '13:51:23'},
    {airline: 'fft', time: '17:04:44'},
    {airline: 'dal', time: '13:00:29'},
    {airline: 'nks', time: '12:26:16'},
    {airline: 'ual', time: '14:24:14'},
    {airline: 'hal', time: '13:19:04'},
    {airline: 'fft', time: '09:52:09'},
    {airline: 'aal', time: '14:34:32'},
    {airline: 'jbu', time: '19:30:17'},
    {airline: 'fft', time: '05:11:19'},
    {airline: 'swa', time: '18:16:37'},
    {airline: 'fft', time: '08:09:40'},
    {airline: 'fft', time: '09:18:30'},
    {airline: 'aal', time: '20:23:45'},
    {airline: 'dal', time: '18:15:02'},
    {airline: 'aal', time: '00:33:06'},
    {airline: 'dal', time: '22:48:00'},
    {airline: 'ual', time: '17:11:32'},
    {airline: 'dal', time: '13:09:20'},
    {airline: 'swa', time: '13:34:37'},
    {airline: 'aal', time: '14:02:24'},
    {airline: 'swa', time: '11:34:32'},
    {airline: 'fft', time: '12:05:09'},
    {airline: 'aal', time: '06:48:41'},
    {airline: 'swa', time: '14:11:05'},
    {airline: 'dal', time: '11:42:00'},
    {airline: 'dal', time: '15:12:53'},
    {airline: 'dal', time: '12:22:15'},
    {airline: 'swa', time: '13:06:17'},
    {airline: 'jbu', time: '05:28:33'},
    {airline: 'ual', time: '12:52:25'},
    {airline: 'ual', time: '15:09:44'},
    {airline: 'nks', time: '05:34:10'},
    {airline: 'ual', time: '07:57:46'},
    {airline: 'ual', time: '13:35:17'},
    {airline: 'jbu', time: '17:19:40'},
    {airline: 'aal', time: '13:40:01'},
    {airline: 'ual', time: '11:53:19'},
    {airline: 'dal', time: '18:52:57'},
    {airline: 'swa', time: '12:01:43'},
    {airline: 'aal', time: '11:37:19'},
    {airline: 'dal', time: '10:50:54'},
    {airline: 'dal', time: '16:01:12'},
    {airline: 'fft', time: '16:19:48'},
    {airline: 'ual', time: '11:28:51'},
    {airline: 'jbu', time: '19:43:06'},
    {airline: 'swa', time: '12:54:30'},
    {airline: 'ual', time: '13:34:35'},
    {airline: 'swa', time: '09:01:26'},
    {airline: 'jbu', time: '11:41:38'},
    {airline: 'swa', time: '09:35:49'},
    {airline: 'dal', time: '14:45:51'},
    {airline: 'ual', time: '10:29:46'},
    {airline: 'fft', time: '09:59:21'},
    {airline: 'nks', time: '17:36:33'},
    {airline: 'ual', time: '09:11:59'},
    {airline: 'aal', time: '10:20:56'},
    {airline: 'aal', time: '20:51:12'},
    {airline: 'swa', time: '15:03:36'},
    {airline: 'dal', time: '09:48:20'},
    {airline: 'aay', time: '09:49:41'},
    {airline: 'swa', time: '11:43:49'},
    {airline: 'nks', time: '12:51:35'},
    {airline: 'aay', time: '03:43:37'},
    {airline: 'ual', time: '15:31:29'},
    {airline: 'ual', time: '11:51:28'},
    {airline: 'swa', time: '09:24:39'},
    {airline: 'fft', time: '12:03:53'},
    {airline: 'nks', time: '12:15:39'},
    {airline: 'ual', time: '12:20:49'},
    {airline: 'fft', time: '15:43:54'},
    {airline: 'hal', time: '13:41:05'},
    {airline: 'aay', time: '17:30:00'},
    {airline: 'scx', time: '17:05:38'},
    {airline: 'aal', time: '11:39:20'},
    {airline: 'ual', time: '10:39:42'},
    {airline: 'aal', time: '15:26:59'},
    {airline: 'aay', time: '23:14:28'},
    {airline: 'fft', time: '11:12:00'},
    {airline: 'ual', time: '10:01:20'},
    {airline: 'ual', time: '17:47:50'},
    {airline: 'ual', time: '00:03:09'},
    {airline: 'aal', time: '17:38:45'},
    {airline: 'dal', time: '18:03:48'},
    {airline: 'ual', time: '18:52:14'},
    {airline: 'hal', time: '14:54:18'},
    {airline: 'scx', time: '17:43:10'},
    {airline: 'dal', time: '17:54:23'},
    {airline: 'dal', time: '18:27:56'},
    {airline: 'dal', time: '00:41:41'},
    {airline: 'dal', time: '13:49:00'},
    {airline: 'dal', time: '16:06:06'},
    {airline: 'aal', time: '18:45:41'},
    {airline: 'aal', time: '06:39:54'},
    {airline: 'dal', time: '18:24:42'},
    {airline: 'aal', time: '16:34:04'},
    {airline: 'swa', time: '11:58:17'},
    {airline: 'dal', time: '06:51:10'},
    {airline: 'swa', time: '11:25:06'},
    {airline: 'asa', time: '11:29:43'},
    {airline: 'ual', time: '15:46:57'},
    {airline: 'swa', time: '05:58:40'},
    {airline: 'swa', time: '10:20:15'},
    {airline: 'fft', time: '18:55:18'},
    {airline: 'dal', time: '16:04:30'},
    {airline: 'jbu', time: '18:25:28'},
    {airline: 'jbu', time: '11:33:18'},
    {airline: 'aal', time: '18:49:31'},
    {airline: 'dal', time: '07:52:43'},
    {airline: 'ual', time: '18:37:40'},
    {airline: 'dal', time: '18:29:16'},
    {airline: 'aal', time: '11:33:52'},
    {airline: 'dal', time: '18:16:19'},
    {airline: 'vrd', time: '18:18:17'},
    {airline: 'nks', time: '17:54:39'},
    {airline: 'dal', time: '18:44:53'},
    {airline: 'aal', time: '16:44:02'},
    {airline: 'nks', time: '11:36:47'},
    {airline: 'fft', time: '14:15:41'},
    {airline: 'aal', time: '12:09:29'},
    {airline: 'dal', time: '14:31:23'},
    {airline: 'dal', time: '19:40:17'},
    {airline: 'aal', time: '14:21:20'},
    {airline: 'aal', time: '12:50:59'},
    {airline: 'ual', time: '20:06:28'},
    {airline: 'swa', time: '17:20:20'},
    {airline: 'hal', time: '08:29:46'},
    {airline: 'swa', time: '15:14:19'},
    {airline: 'dal', time: '16:32:13'},
    {airline: 'ual', time: '04:27:38'},
    {airline: 'swa', time: '06:52:37'},
    {airline: 'aal', time: '14:57:32'},
    {airline: 'aal', time: '16:07:07'},
    {airline: 'swa', time: '06:34:51'},
    {airline: 'dal', time: '02:38:44'},
    {airline: 'ual', time: '14:42:25'},
    {airline: 'swa', time: '12:47:03'},
    {airline: 'dal', time: '15:59:17'},
    {airline: 'jbu', time: '15:51:38'},
    {airline: 'aal', time: '16:06:36'},
    {airline: 'asa', time: '09:52:02'},
    {airline: 'ual', time: '00:11:03'},
    {airline: 'ual', time: '12:34:05'},
    {airline: 'vrd', time: '13:15:07'},
    {airline: 'swa', time: '21:41:16'},
    {airline: 'swa', time: '10:27:07'},
    {airline: 'ual', time: '15:13:25'},
    {airline: 'fft', time: '12:31:58'},
    {airline: 'swa', time: '23:18:37'},
    {airline: 'aal', time: '17:15:30'},
    {airline: 'swa', time: '11:57:24'},
    {airline: 'fft', time: '09:43:11'},
    {airline: 'aal', time: '05:00:40'},
    {airline: 'dal', time: '18:58:38'},
    {airline: 'dal', time: '10:39:12'},
    {airline: 'fft', time: '01:39:11'},
    {airline: 'aal', time: '13:25:32'},
    {airline: 'swa', time: '10:38:09'},
    {airline: 'swa', time: '16:05:55'},
    {airline: 'nks', time: '15:55:58'},
    {airline: 'ual', time: '10:24:41'},
    {airline: 'dal', time: '19:58:56'},
    {airline: 'ual', time: '13:44:35'},
    {airline: 'aal', time: '17:17:03'},
    {airline: 'swa', time: '11:50:52'},
    {airline: 'ual', time: '11:22:43'},
    {airline: 'dal', time: '18:41:45'},
    {airline: 'dal', time: '10:35:46'},
    {airline: 'dal', time: '16:23:15'},
    {airline: 'dal', time: '03:03:16'},
    {airline: 'fft', time: '14:59:17'},
    {airline: 'ual', time: '11:31:47'},
    {airline: 'vrd', time: '14:32:24'},
    {airline: 'ual', time: '13:28:15'},
    {airline: 'nks', time: '18:30:32'},
    {airline: 'dal', time: '11:19:00'},
    {airline: 'nks', time: '11:52:46'},
    {airline: 'dal', time: '10:53:47'},
    {airline: 'asa', time: '15:29:33'},
    {airline: 'ual', time: '10:16:52'},
    {airline: 'fft', time: '10:42:02'},
    {airline: 'swa', time: '15:58:11'},
    {airline: 'jbu', time: '06:40:39'},
    {airline: 'ual', time: '20:13:30'},
    {airline: 'aal', time: '19:47:55'},
    {airline: 'jbu', time: '13:00:02'},
    {airline: 'aay', time: '08:20:26'},
    {airline: 'swa', time: '09:16:29'},
    {airline: 'fft', time: '05:55:00'},
    {airline: 'jbu', time: '18:37:34'},
    {airline: 'vrd', time: '19:08:23'},
    {airline: 'fft', time: '04:19:45'},
    {airline: 'aal', time: '15:56:19'},
    {airline: 'aal', time: '07:17:55'},
    {airline: 'nks', time: '16:08:49'},
    {airline: 'jbu', time: '14:36:17'},
    {airline: 'hal', time: '00:03:09'},
    {airline: 'fft', time: '16:05:12'},
    {airline: 'ual', time: '06:10:02'},
    {airline: 'dal', time: '12:41:42'},
    {airline: 'dal', time: '17:58:40'},
    {airline: 'fft', time: '23:08:23'},
    {airline: 'nks', time: '10:04:14'},
    {airline: 'aal', time: '11:08:25'},
    {airline: 'dal', time: '16:52:10'},
    {airline: 'aay', time: '09:48:58'},
    {airline: 'aay', time: '09:28:07'},
    {airline: 'fft', time: '23:14:44'},
    {airline: 'aal', time: '03:11:42'},
    {airline: 'aal', time: '06:16:05'},
    {airline: 'dal', time: '16:39:06'},
    {airline: 'jbu', time: '00:22:09'},
    {airline: 'dal', time: '15:54:57'},
    {airline: 'swa', time: '15:37:13'},
    {airline: 'scx', time: '13:36:33'},
    {airline: 'vrd', time: '13:24:57'},
    {airline: 'swa', time: '09:28:01'},
    {airline: 'aal', time: '13:27:16'},
    {airline: 'aay', time: '07:11:52'},
    {airline: 'aal', time: '14:42:08'},
    {airline: 'fft', time: '17:16:07'},
    {airline: 'aay', time: '15:55:14'},
    {airline: 'ual', time: '18:11:51'},
    {airline: 'aal', time: '04:34:33'},
    {airline: 'dal', time: '14:36:53'},
    {airline: 'dal', time: '10:00:05'},
    {airline: 'ual', time: '09:11:45'},
    {airline: 'ual', time: '09:43:30'},
    {airline: 'aal', time: '16:06:20'},
    {airline: 'aal', time: '15:10:36'},
    {airline: 'fft', time: '05:20:39'},
    {airline: 'swa', time: '08:58:01'},
    {airline: 'swa', time: '17:11:25'},
    {airline: 'ual', time: '11:39:22'},
    {airline: 'dal', time: '05:01:30'},
    {airline: 'dal', time: '22:40:40'},
    {airline: 'aal', time: '09:23:12'},
    {airline: 'hal', time: '08:36:43'},
    {airline: 'ual', time: '14:14:56'},
    {airline: 'vrd', time: '11:12:08'},
    {airline: 'aal', time: '14:34:39'},
    {airline: 'swa', time: '13:24:13'},
    {airline: 'nks', time: '10:44:19'},
    {airline: 'scx', time: '12:15:12'},
    {airline: 'vrd', time: '14:30:08'},
    {airline: 'dal', time: '11:38:10'},
    {airline: 'jbu', time: '13:39:12'},
    {airline: 'ual', time: '09:50:35'},
    {airline: 'swa', time: '09:52:29'},
    {airline: 'nks', time: '08:43:25'},
    {airline: 'dal', time: '18:11:38'},
    {airline: 'aal', time: '14:50:50'},
    {airline: 'ual', time: '19:59:44'},
    {airline: 'ual', time: '23:14:26'},
    {airline: 'aal', time: '09:16:57'},
    {airline: 'swa', time: '09:47:42'},
    {airline: 'dal', time: '11:17:44'},
    {airline: 'aal', time: '07:40:49'},
    {airline: 'ual', time: '18:57:59'},
    {airline: 'ual', time: '12:03:26'},
    {airline: 'aay', time: '11:15:23'},
    {airline: 'aal', time: '12:16:15'},
    {airline: 'aay', time: '04:52:02'},
    {airline: 'nks', time: '22:16:03'},
    {airline: 'ual', time: '11:45:03'},
    {airline: 'dal', time: '14:13:56'},
    {airline: 'aal', time: '13:57:52'},
    {airline: 'scx', time: '19:58:59'},
    {airline: 'dal', time: '04:01:24'},
    {airline: 'jbu', time: '06:08:26'},
    {airline: 'swa', time: '11:44:38'},
    {airline: 'jbu', time: '11:23:28'},
    {airline: 'aal', time: '20:46:04'},
    {airline: 'aal', time: '15:02:21'},
    {airline: 'ual', time: '19:04:02'},
    {airline: 'aal', time: '14:06:46'},
    {airline: 'dal', time: '17:31:43'},
    {airline: 'dal', time: '11:34:51'},
    {airline: 'ual', time: '11:13:31'},
    {airline: 'asa', time: '06:45:16'},
    {airline: 'dal', time: '11:18:28'},
    {airline: 'dal', time: '16:19:40'},
    {airline: 'hal', time: '06:53:52'},
    {airline: 'swa', time: '07:11:13'},
    {airline: 'ual', time: '04:14:25'},
    {airline: 'ual', time: '20:14:18'},
    {airline: 'swa', time: '09:55:14'},
    {airline: 'hal', time: '09:30:19'},
    {airline: 'swa', time: '13:24:38'},
    {airline: 'dal', time: '09:26:32'},
    {airline: 'dal', time: '17:40:16'},
    {airline: 'aay', time: '14:15:05'},
    {airline: 'ual', time: '18:34:46'},
    {airline: 'scx', time: '17:57:42'},
    {airline: 'jbu', time: '16:37:06'},
    {airline: 'dal', time: '03:39:16'},
    {airline: 'aal', time: '18:48:11'},
    {airline: 'swa', time: '14:05:41'},
    {airline: 'ual', time: '16:08:51'},
    {airline: 'aal', time: '12:50:44'},
    {airline: 'fft', time: '15:14:04'},
    {airline: 'dal', time: '18:51:00'},
    {airline: 'dal', time: '11:46:22'},
    {airline: 'nks', time: '10:13:26'},
    {airline: 'aay', time: '05:27:47'},
    {airline: 'aal', time: '21:43:40'},
    {airline: 'dal', time: '11:05:23'},
    {airline: 'aal', time: '11:32:18'},
    {airline: 'jbu', time: '12:38:28'},
    {airline: 'dal', time: '12:05:22'},
    {airline: 'swa', time: '10:55:21'},
    {airline: 'ual', time: '16:56:46'},
    {airline: 'fft', time: '14:51:57'},
    {airline: 'swa', time: '16:16:53'},
    {airline: 'ual', time: '18:09:11'},
    {airline: 'hal', time: '07:40:46'},
    {airline: 'fft', time: '05:03:28'},
    {airline: 'dal', time: '15:49:03'},
    {airline: 'swa', time: '09:24:23'},
    {airline: 'nks', time: '18:49:45'},
    {airline: 'scx', time: '11:05:08'},
    {airline: 'aal', time: '06:13:55'},
    {airline: 'ual', time: '09:05:55'},
    {airline: 'aal', time: '05:38:20'},
    {airline: 'aal', time: '09:31:36'},
    {airline: 'ual', time: '16:39:02'},
    {airline: 'dal', time: '01:41:13'},
    {airline: 'swa', time: '05:50:11'},
    {airline: 'aal', time: '07:57:46'},
    {airline: 'ual', time: '06:07:14'},
    {airline: 'swa', time: '14:35:46'},
    {airline: 'aal', time: '15:45:09'},
    {airline: 'aal', time: '09:07:53'},
    {airline: 'swa', time: '16:28:37'},
    {airline: 'aal', time: '07:42:01'},
    {airline: 'swa', time: '05:39:29'},
    {airline: 'dal', time: '16:09:16'},
    {airline: 'hal', time: '05:58:42'},
    {airline: 'aal', time: '11:35:20'},
    {airline: 'fft', time: '00:29:49'},
    {airline: 'swa', time: '13:54:56'},
    {airline: 'dal', time: '19:53:50'},
    {airline: 'nks', time: '12:10:21'},
    {airline: 'swa', time: '11:22:00'},
    {airline: 'ual', time: '14:49:36'},
    {airline: 'swa', time: '13:29:23'},
    {airline: 'aal', time: '11:13:36'},
    {airline: 'aay', time: '09:06:58'},
    {airline: 'aal', time: '15:19:23'},
    {airline: 'dal', time: '13:35:43'},
    {airline: 'dal', time: '18:47:18'},
    {airline: 'ual', time: '11:46:11'},
    {airline: 'jbu', time: '17:14:58'},
    {airline: 'swa', time: '04:53:48'},
    {airline: 'hal', time: '09:44:50'},
    {airline: 'swa', time: '14:51:46'},
    {airline: 'aal', time: '16:41:54'},
    {airline: 'swa', time: '18:48:19'},
    {airline: 'swa', time: '17:50:16'},
    {airline: 'aal', time: '08:24:33'},
    {airline: 'jbu', time: '08:15:18'},
    {airline: 'swa', time: '17:25:51'},
    {airline: 'hal', time: '15:21:28'},
    {airline: 'ual', time: '12:02:36'},
    {airline: 'nks', time: '12:50:06'},
    {airline: 'aal', time: '13:27:33'},
    {airline: 'dal', time: '12:02:04'},
    {airline: 'scx', time: '08:33:53'},
    {airline: 'ual', time: '18:28:44'},
    {airline: 'dal', time: '23:22:29'},
    {airline: 'dal', time: '16:53:15'},
    {airline: 'aal', time: '04:01:33'},
    {airline: 'ual', time: '13:24:21'},
    {airline: 'ual', time: '11:35:43'},
    {airline: 'aay', time: '13:34:56'},
    {airline: 'ual', time: '15:11:02'},
    {airline: 'aal', time: '13:56:48'},
    {airline: 'swa', time: '10:45:55'},
    {airline: 'nks', time: '08:57:30'},
    {airline: 'dal', time: '08:32:43'},
    {airline: 'jbu', time: '12:46:14'},
    {airline: 'nks', time: '15:39:59'},
    {airline: 'dal', time: '18:28:33'},
    {airline: 'abc', time: '20:56:53'},
    {airline: 'dal', time: '17:32:45'},
    {airline: 'ual', time: '12:56:25'},
    {airline: 'dal', time: '09:18:06'},
    {airline: 'fft', time: '05:40:53'},
    {airline: 'dal', time: '01:10:18'},
    {airline: 'aal', time: '20:49:20'},
    {airline: 'fft', time: '19:37:25'},
    {airline: 'aal', time: '16:40:24'},
    {airline: 'hal', time: '13:17:34'},
    {airline: 'nks', time: '14:10:41'},
    {airline: 'dal', time: '16:27:23'},
    {airline: 'dal', time: '13:23:46'},
    {airline: 'swa', time: '16:27:36'},
    {airline: 'ual', time: '10:23:23'},
    {airline: 'hal', time: '11:12:36'},
    {airline: 'aal', time: '14:41:31'},
    {airline: 'dal', time: '11:09:08'},
    {airline: 'aal', time: '07:27:40'},
    {airline: 'aal', time: '09:03:43'},
    {airline: 'ual', time: '23:12:38'},
    {airline: 'swa', time: '13:15:34'},
    {airline: 'vrd', time: '10:27:46'},
    {airline: 'aal', time: '18:45:55'},
    {airline: 'nks', time: '11:47:47'},
    {airline: 'aay', time: '16:43:31'},
    {airline: 'swa', time: '11:17:10'},
    {airline: 'fft', time: '10:20:06'},
    {airline: 'swa', time: '18:24:16'},
    {airline: 'swa', time: '17:44:08'},
    {airline: 'aal', time: '09:54:42'},
    {airline: 'nks', time: '14:08:46'},
    {airline: 'ual', time: '14:45:11'},
    {airline: 'jbu', time: '10:10:26'},
    {airline: 'swa', time: '15:42:11'},
    {airline: 'aay', time: '17:24:56'},
    {airline: 'fft', time: '10:53:49'},
    {airline: 'ual', time: '13:59:30'},
    {airline: 'swa', time: '20:21:05'},
    {airline: 'jbu', time: '11:10:58'},
    {airline: 'hal', time: '18:52:07'},
    {airline: 'swa', time: '20:13:58'},
    {airline: 'fft', time: '12:05:21'},
    {airline: 'ual', time: '11:20:47'},
    {airline: 'swa', time: '18:01:16'},
    {airline: 'swa', time: '01:49:39'},
    {airline: 'fft', time: '11:12:46'},
    {airline: 'aal', time: '16:38:16'},
    {airline: 'dal', time: '11:24:42'},
    {airline: 'ual', time: '18:05:06'},
    {airline: 'ual', time: '15:28:56'},
    {airline: 'ual', time: '09:21:52'},
    {airline: 'dal', time: '06:24:43'},
    {airline: 'dal', time: '08:11:05'},
    {airline: 'aal', time: '12:58:37'},
    {airline: 'aal', time: '16:34:07'},
    {airline: 'fft', time: '10:17:05'},
    {airline: 'aal', time: '18:09:23'},
    {airline: 'dal', time: '17:43:35'},
    {airline: 'ual', time: '17:15:47'},
    {airline: 'dal', time: '08:29:34'},
    {airline: 'aal', time: '05:26:28'},
    {airline: 'fft', time: '14:34:29'},
    {airline: 'aay', time: '09:14:10'},
    {airline: 'dal', time: '11:21:11'},
    {airline: 'hal', time: '12:34:43'},
    {airline: 'aay', time: '10:47:44'},
    {airline: 'hal', time: '09:34:57'},
    {airline: 'dal', time: '17:00:42'},
    {airline: 'ual', time: '09:26:04'},
    {airline: 'swa', time: '22:54:10'},
    {airline: 'scx', time: '10:46:11'},
    {airline: 'ual', time: '11:38:23'},
    {airline: 'ual', time: '15:28:14'},
    {airline: 'dal', time: '18:27:32'},
    {airline: 'fft', time: '19:11:02'},
    {airline: 'dal', time: '10:42:35'},
    {airline: 'aal', time: '19:21:45'},
    {airline: 'dal', time: '12:18:43'},
    {airline: 'swa', time: '12:47:27'},
    {airline: 'fft', time: '11:49:19'},
    {airline: 'ual', time: '21:22:36'},
    {airline: 'swa', time: '14:02:39'},
    {airline: 'scx', time: '09:18:36'},
    {airline: 'jbu', time: '19:25:07'},
    {airline: 'vrd', time: '13:11:07'},
    {airline: 'dal', time: '09:03:25'},
    {airline: 'dal', time: '11:01:30'},
    {airline: 'swa', time: '16:18:57'},
    {airline: 'dal', time: '16:59:32'},
    {airline: 'ual', time: '06:09:35'},
    {airline: 'dal', time: '19:56:37'},
    {airline: 'dal', time: '10:03:23'},
    {airline: 'ual', time: '11:10:26'},
    {airline: 'dal', time: '13:20:20'},
    {airline: 'ual', time: '01:58:45'},
    {airline: 'nks', time: '13:15:50'},
    {airline: 'aal', time: '09:27:40'},
    {airline: 'aal', time: '14:20:15'},
    {airline: 'aal', time: '17:26:46'},
    {airline: 'ual', time: '07:11:03'},
    {airline: 'aal', time: '03:13:50'},
    {airline: 'ual', time: '10:31:28'},
    {airline: 'aal', time: '11:19:23'},
    {airline: 'nks', time: '23:43:50'},
    {airline: 'dal', time: '11:26:52'},
    {airline: 'vrd', time: '13:03:15'},
    {airline: 'ual', time: '17:40:36'},
    {airline: 'ual', time: '12:30:29'},
    {airline: 'swa', time: '12:52:18'},
    {airline: 'swa', time: '12:22:51'},
    {airline: 'swa', time: '09:31:00'},
    {airline: 'dal', time: '13:15:20'},
    {airline: 'swa', time: '10:42:52'},
    {airline: 'ual', time: '21:09:14'},
    {airline: 'ual', time: '09:55:02'},
    {airline: 'ual', time: '09:00:21'},
    {airline: 'dal', time: '05:36:12'},
    {airline: 'swa', time: '15:09:13'},
    {airline: 'jbu', time: '12:43:04'},
    {airline: 'hal', time: '12:40:36'},
    {airline: 'ual', time: '06:52:57'},
    {airline: 'dal', time: '20:44:39'},
    {airline: 'ual', time: '09:54:47'},
    {airline: 'swa', time: '04:42:09'},
    {airline: 'swa', time: '09:51:25'},
    {airline: 'nks', time: '04:51:55'},
    {airline: 'dal', time: '19:06:50'},
    {airline: 'aay', time: '10:32:00'},
    {airline: 'ual', time: '05:25:46'},
    {airline: 'swa', time: '12:42:55'},
    {airline: 'swa', time: '09:30:02'},
    {airline: 'ual', time: '12:11:59'},
    {airline: 'ual', time: '02:13:16'},
    {airline: 'fft', time: '21:31:46'},
    {airline: 'aal', time: '13:41:32'},
    {airline: 'fft', time: '14:27:02'},
    {airline: 'ual', time: '10:41:18'},
    {airline: 'dal', time: '16:26:53'},
    {airline: 'swa', time: '15:13:55'},
    {airline: 'ual', time: '17:19:13'},
    {airline: 'swa', time: '08:09:05'},
    {airline: 'aal', time: '07:36:30'},
    {airline: 'aal', time: '02:10:53'},
    {airline: 'ual', time: '17:56:23'},
    {airline: 'aal', time: '05:26:04'},
    {airline: 'fft', time: '13:27:43'},
    {airline: 'fft', time: '06:37:09'},
    {airline: 'aal', time: '10:45:44'},
    {airline: 'ual', time: '19:04:53'},
    {airline: 'swa', time: '21:46:21'},
    {airline: 'scx', time: '14:45:12'},
    {airline: 'asa', time: '11:45:18'},
    {airline: 'aal', time: '15:53:10'},
    {airline: 'ual', time: '12:23:55'},
    {airline: 'swa', time: '15:39:38'},
    {airline: 'aal', time: '12:59:52'},
    {airline: 'swa', time: '12:35:28'},
    {airline: 'swa', time: '14:19:00'},
    {airline: 'aal', time: '16:46:27'},
    {airline: 'ual', time: '15:11:37'},
    {airline: 'aal', time: '16:48:05'},
    {airline: 'dal', time: '19:21:43'},
    {airline: 'ual', time: '05:01:13'},
    {airline: 'ual', time: '13:38:20'},
    {airline: 'dal', time: '18:18:54'},
    {airline: 'aal', time: '18:09:46'},
    {airline: 'jbu', time: '15:41:52'},
    {airline: 'aal', time: '09:50:24'},
    {airline: 'asa', time: '05:43:19'},
    {airline: 'swa', time: '15:41:36'},
    {airline: 'ual', time: '11:45:22'},
    {airline: 'nks', time: '04:04:45'},
    {airline: 'dal', time: '09:40:41'},
    {airline: 'jbu', time: '20:05:34'},
    {airline: 'dal', time: '11:52:06'},
    {airline: 'jbu', time: '11:50:47'},
    {airline: 'jbu', time: '17:47:08'},
    {airline: 'aal', time: '09:45:29'},
    {airline: 'dal', time: '16:53:42'},
    {airline: 'fft', time: '14:48:43'},
    {airline: 'ual', time: '11:54:34'},
    {airline: 'ual', time: '18:02:27'},
    {airline: 'dal', time: '09:54:51'},
    {airline: 'jbu', time: '17:43:52'},
    {airline: 'swa', time: '10:50:02'},
    {airline: 'ual', time: '12:00:01'},
    {airline: 'fft', time: '18:32:16'},
    {airline: 'dal', time: '14:46:22'},
    {airline: 'fft', time: '10:32:10'},
    {airline: 'dal', time: '11:31:01'},
    {airline: 'dal', time: '06:20:02'},
    {airline: 'aal', time: '07:07:21'},
    {airline: 'dal', time: '09:36:45'},
    {airline: 'aal', time: '12:29:15'},
    {airline: 'dal', time: '16:22:24'},
    {airline: 'hal', time: '16:35:53'},
    {airline: 'fft', time: '10:43:49'},
    {airline: 'nks', time: '10:44:20'},
    {airline: 'hal', time: '03:49:51'},
    {airline: 'swa', time: '17:57:34'},
    {airline: 'dal', time: '13:16:55'},
    {airline: 'ual', time: '15:33:34'},
    {airline: 'ual', time: '13:12:34'},
    {airline: 'aal', time: '07:02:51'},
    {airline: 'swa', time: '13:38:05'},
    {airline: 'asa', time: '18:48:11'},
    {airline: 'swa', time: '10:07:25'},
    {airline: 'ual', time: '08:30:09'},
    {airline: 'ual', time: '17:51:20'},
    {airline: 'dal', time: '14:13:52'},
    {airline: 'nks', time: '12:24:49'},
    {airline: 'swa', time: '17:06:24'},
    {airline: 'aal', time: '11:56:29'},
    {airline: 'aal', time: '05:30:46'},
    {airline: 'aal', time: '18:52:35'},
    {airline: 'aal', time: '09:04:43'},
    {airline: 'dal', time: '10:09:59'},
    {airline: 'ual', time: '09:17:04'},
    {airline: 'dal', time: '10:00:08'},
    {airline: 'dal', time: '14:43:56'},
    {airline: 'swa', time: '14:56:16'},
    {airline: 'fft', time: '11:43:19'},
    {airline: 'ual', time: '11:12:01'},
    {airline: 'ual', time: '16:39:02'},
    {airline: 'aal', time: '13:44:03'},
    {airline: 'jbu', time: '16:20:31'},
    {airline: 'aal', time: '07:04:05'},
    {airline: 'dal', time: '17:19:05'},
    {airline: 'aay', time: '18:41:02'},
    {airline: 'ual', time: '07:25:47'},
    {airline: 'swa', time: '16:16:26'},
    {airline: 'fft', time: '10:05:19'},
    {airline: 'aal', time: '17:08:26'},
    {airline: 'swa', time: '12:32:45'},
    {airline: 'dal', time: '18:02:19'},
    {airline: 'swa', time: '00:46:06'},
    {airline: 'nks', time: '09:34:07'},
    {airline: 'asa', time: '11:07:54'},
    {airline: 'dal', time: '15:16:18'},
    {airline: 'dal', time: '07:00:16'},
    {airline: 'fft', time: '12:40:38'},
    {airline: 'aay', time: '13:20:27'},
    {airline: 'fft', time: '10:46:44'},
    {airline: 'fft', time: '06:34:38'},
    {airline: 'ual', time: '16:45:19'},
    {airline: 'swa', time: '16:01:00'},
    {airline: 'dal', time: '10:20:38'},
    {airline: 'swa', time: '12:11:40'},
    {airline: 'nks', time: '14:55:35'},
    {airline: 'aal', time: '11:20:52'},
    {airline: 'hal', time: '11:52:25'},
    {airline: 'ual', time: '20:42:26'},
    {airline: 'dal', time: '15:39:30'},
    {time: '20:56:53'},
    {airline: 'ual', time: '15:33:03'},
    {airline: 'aay', time: '19:29:36'},
    {airline: 'nks', time: '00:53:54'},
    {airline: 'aal', time: '16:19:16'},
    {airline: 'aal', time: '14:47:19'},
    {airline: 'aay', time: '17:14:17'},
    {airline: 'aal', time: '11:25:44'},
    {airline: 'ual', time: '09:20:00'},
    {airline: 'swa', time: '07:40:57'},
    {airline: 'ual', time: '13:46:16'},
    {airline: 'nks', time: '09:06:24'},
    {airline: 'aal', time: '12:50:40'},
    {airline: 'swa', time: '12:24:47'},
    {airline: 'aal', time: '20:59:21'},
    {},
    {airline: 'swa', time: '14:21:18'},
    {airline: 'vrd', time: '17:42:58'},
    {airline: 'swa', time: '18:13:56'},
    {airline: 'fft', time: '05:09:19'},
    {airline: 'dal', time: '14:40:16'},
    {airline: 'ual', time: '18:40:20'},
    {airline: 'scx', time: '11:43:59'},
    {airline: 'scx', time: '13:19:35'},
    {airline: 'aal', time: '14:02:52'},
    {airline: 'dal', time: '13:29:43'},
    {airline: 'nks', time: '10:40:53'},
    {airline: 'nks', time: '12:44:38'},
    {airline: 'fft', time: '18:31:50'},
    {airline: 'dal', time: '06:12:48'},
    {airline: 'aal', time: '15:09:30'},
    {airline: 'aal', time: '16:34:38'},
    {airline: 'vrd', time: '09:10:48'},
    {airline: 'vrd', time: '09:23:06'},
    {airline: 'dal', time: '12:51:22'},
    {airline: 'dal', time: '01:19:29'},
    {airline: 'ual', time: '14:44:14'},
    {airline: 'nks', time: '09:42:19'},
    {airline: 'ual', time: '09:59:41'},
    {airline: 'swa', time: '10:57:17'},
    {airline: 'dal', time: '14:42:51'},
    {airline: 'swa', time: '14:27:12'},
    {airline: 'ual', time: '16:53:56'},
    {airline: 'swa', time: '10:20:42'},
    {airline: 'nks', time: '05:27:31'},
    {airline: 'nks', time: '16:12:57'},
    {airline: 'fft', time: '10:27:42'},
    {airline: 'dal', time: '05:31:07'},
    {airline: 'ual', time: '16:25:41'},
    {airline: 'swa', time: '11:23:36'},
    {airline: 'aal', time: '15:09:20'},
    {airline: 'aay', time: '16:57:09'},
    {airline: 'ual', time: '08:07:56'},
    {airline: 'jbu', time: '07:05:44'},
    {airline: 'dal', time: '13:08:22'},
    {airline: 'ual', time: '16:32:33'},
    {airline: 'dal', time: '12:53:19'},
    {airline: 'ual', time: '09:59:29'},
    {airline: 'swa', time: '10:28:56'},
    {airline: 'ual', time: '18:54:49'},
    {airline: 'aal', time: '10:14:11'},
    {airline: 'aal', time: '14:12:06'},
    {airline: 'dal', time: '08:25:13'},
    {airline: 'dal', time: '12:19:22'},
    {airline: 'ual', time: '12:36:50'},
    {airline: 'dal', time: '22:25:52'},
    {airline: 'ual', time: '16:06:29'},
    {airline: 'swa', time: '11:53:35'},
    {airline: 'aal', time: '08:51:22'},
    {airline: 'ual', time: '04:36:34'},
    {airline: 'fft', time: '07:27:11'},
    {airline: 'aal', time: '15:46:59'},
    {airline: 'aal', time: '17:06:49'},
    {airline: 'ual', time: '01:18:12'},
    {airline: 'swa', time: '07:16:36'},
    {airline: 'swa', time: '06:39:16'},
    {airline: 'fft', time: '08:35:38'},
    {airline: 'aal', time: '17:01:40'},
    {airline: 'fft', time: '12:57:31'},
    {airline: 'jbu', time: '15:59:16'},
    {airline: 'dal', time: '09:48:27'},
    {airline: 'aal', time: '12:56:34'},
    {airline: 'dal', time: '09:37:39'},
    {airline: 'vrd', time: '10:20:39'},
    {airline: 'aal', time: '09:35:48'},
    {airline: 'swa', time: '09:00:30'},
    {airline: 'ual', time: '11:59:52'},
    {airline: 'dal', time: '10:41:04'},
    {airline: 'aal', time: '07:57:46'},
    {airline: 'aal', time: '18:45:37'},
    {airline: 'aal', time: '14:57:19'},
    {airline: 'fft', time: '17:42:31'},
    {airline: 'dal', time: '06:09:56'},
    {airline: 'dal', time: '14:43:00'},
    {airline: 'hal', time: '11:03:44'},
    {airline: 'ual', time: '09:02:27'},
    {airline: 'ual', time: '11:29:56'},
    {airline: 'swa', time: '16:09:56'},
    {airline: 'dal', time: '11:00:14'},
    {airline: 'nks', time: '11:19:54'},
    {airline: 'dal', time: '11:19:45'},
    {airline: 'vrd', time: '13:12:40'},
    {airline: 'aay', time: '17:14:46'},
    {airline: 'ual', time: '15:27:10'},
    {airline: 'ual', time: '05:57:20'},
    {airline: 'swa', time: '20:29:44'},
    {airline: 'jbu', time: '03:54:52'},
    {airline: 'aal', time: '17:19:32'},
    {airline: 'hal', time: '11:52:26'},
    {airline: 'fft', time: '11:34:53'},
    {airline: 'fft', time: '12:56:45'},
    {airline: 'ual', time: '19:08:20'},
    {airline: 'fft', time: '16:13:00'},
    {airline: 'aal', time: '09:30:21'},
    {airline: 'aal', time: '17:20:46'},
    {airline: 'ual', time: '12:34:26'},
    {airline: 'aal', time: '10:18:17'},
    {airline: 'scx', time: '13:15:43'},
    {airline: 'ual', time: '07:01:41'},
    {airline: 'aal', time: '13:53:41'},
    {airline: 'aal', time: '14:12:55'},
    {airline: 'vrd', time: '13:35:15'},
    {airline: 'hal', time: '10:34:12'},
    {airline: 'dal', time: '13:02:44'},
    {airline: 'dal', time: '22:14:03'},
    {airline: 'dal', time: '17:20:04'},
    {airline: 'swa', time: '09:59:07'},
    {airline: 'aay', time: '03:00:10'},
    {airline: 'hal', time: '09:16:19'},
    {airline: 'aal', time: '11:57:14'},
    {airline: 'aal', time: '11:50:51'},
    {airline: 'dal', time: '16:30:14'},
    {airline: 'swa', time: '11:38:56'},
    {airline: 'ual', time: '02:44:46'},
    {airline: 'fft', time: '18:44:06'},
    {airline: 'fft', time: '16:32:38'},
    {airline: 'ual', time: '14:21:09'},
    {airline: 'jbu', time: '10:04:32'},
    {airline: 'aal', time: '05:26:04'},
    {airline: 'swa', time: '10:56:44'},
    {airline: 'fft', time: '14:07:59'},
    {airline: 'ual', time: '20:54:52'},
    {airline: 'dal', time: '17:55:23'},
    {airline: 'ual', time: '10:18:10'},
    {airline: 'dal', time: '17:49:53'},
    {airline: 'aal', time: '11:22:38'},
    {airline: 'aal', time: '11:21:21'},
    {airline: 'fft', time: '18:18:11'},
    {airline: 'scx', time: '16:07:46'},
    {airline: 'scx', time: '12:09:19'},
    {airline: 'ual', time: '06:48:36'},
    {airline: 'aal', time: '17:31:24'},
    {airline: 'aal', time: '12:12:05'},
    {airline: 'aal', time: '18:20:02'},
    {airline: 'dal', time: '13:07:55'},
    {airline: 'jbu', time: '14:52:09'},
    {airline: 'dal', time: '12:16:14'},
    {airline: 'hal', time: '17:50:27'},
    {airline: 'aal', time: '00:47:43'},
    {airline: 'asa', time: '09:58:20'},
    {airline: 'aal', time: '18:45:36'},
    {airline: 'fft', time: '16:16:38'},
    {airline: 'asa', time: '03:58:55'},
    {airline: 'asa', time: '08:42:40'},
    {airline: 'aal', time: '10:53:37'},
    {airline: 'dal', time: '07:33:40'},
    {airline: 'ual', time: '10:37:38'},
    {airline: 'jbu', time: '03:25:39'},
    {airline: 'fft', time: '14:38:44'},
    {airline: 'dal', time: '05:27:27'},
    {airline: 'dal', time: '13:45:32'},
    {airline: 'swa', time: '11:34:17'},
    {airline: 'aal', time: '17:57:05'},
    {airline: 'vrd', time: '18:15:02'},
    {airline: 'ual', time: '09:43:49'},
    {airline: 'asa', time: '05:08:24'},
    {airline: 'dal', time: '12:15:04'},
    {airline: 'swa', time: '16:22:39'},
    {airline: 'jbu', time: '15:24:42'},
    {airline: 'hal', time: '21:24:47'},
    {airline: 'dal', time: '02:21:07'},
    {airline: 'jbu', time: '11:59:15'},
    {airline: 'dal', time: '07:30:00'},
    {airline: 'aal', time: '15:46:00'},
    {airline: 'aal', time: '12:31:49'},
    {airline: 'swa', time: '15:35:22'},
    {airline: 'ual', time: '12:24:08'},
    {airline: 'dal', time: '20:07:02'},
    {airline: 'dal', time: '13:52:26'},
    {airline: 'jbu', time: '08:16:18'},
    {airline: 'nks', time: '22:24:22'},
    {airline: 'dal', time: '16:58:32'},
    {airline: 'dal', time: '20:57:05'},
    {airline: 'ual', time: '11:11:59'},
    {airline: 'aal', time: '09:01:12'},
    {airline: 'ual', time: '09:21:10'},
    {airline: 'aal', time: '21:25:10'},
    {airline: 'aal', time: '12:49:41'},
    {airline: 'ual', time: '16:04:44'},
    {airline: 'swa', time: '10:10:38'},
    {airline: 'jbu', time: '18:21:40'},
    {airline: 'nks', time: '07:14:25'},
    {airline: 'nks', time: '15:22:39'},
    {airline: 'nks', time: '12:50:24'},
    {airline: 'dal', time: '18:28:36'},
    {airline: 'dal', time: '16:11:58'},
    {airline: 'dal', time: '23:30:06'},
    {airline: 'swa', time: '20:43:57'},
    {airline: 'dal', time: '11:52:56'},
    {airline: 'nks', time: '07:40:34'},
    {airline: 'scx', time: '17:21:26'},
    {airline: 'fft', time: '02:00:58'},
    {airline: 'aal', time: '06:51:57'},
    {airline: 'ual', time: '19:46:06'},
    {airline: 'ual', time: '12:41:25'},
    {airline: 'fft', time: '23:34:25'},
    {airline: 'aal', time: '08:09:10'},
    {airline: 'dal', time: '16:40:50'},
    {airline: 'fft', time: '07:11:28'},
    {airline: 'nks', time: '11:19:24'},
    {airline: 'asa', time: '12:25:47'},
    {airline: 'swa', time: '16:42:23'},
    {airline: 'aal', time: '11:42:24'},
    {airline: 'scx', time: '10:11:01'},
    {airline: 'swa', time: '22:44:38'},
    {airline: 'ual', time: '11:52:56'},
    {airline: 'aal', time: '18:06:08'},
    {airline: 'ual', time: '23:59:09'},
    {airline: 'aal', time: '11:17:53'},
    {airline: 'dal', time: '14:21:34'},
    {airline: 'vrd', time: '09:37:23'},
    {airline: 'ual', time: '09:46:39'},
    {airline: 'aay', time: '14:37:49'},
    {airline: 'aal', time: '13:42:22'},
    {airline: 'ual', time: '15:59:56'},
    {airline: 'swa', time: '12:59:41'},
    {airline: 'swa', time: '11:38:39'},
    {airline: 'ual', time: '14:07:51'},
    {airline: 'ual', time: '11:07:48'},
    {airline: 'fft', time: '08:56:14'},
    {airline: 'fft', time: '09:33:04'},
    {airline: 'ual', time: '00:44:19'},
    {airline: 'dal', time: '16:29:12'},
    {airline: 'ual', time: '12:33:40'},
    {airline: 'dal', time: '18:09:22'},
    {airline: 'swa', time: '14:00:56'},
    {airline: 'aal', time: '22:22:39'},
    {airline: 'jbu', time: '16:10:37'},
    {airline: 'swa', time: '15:45:29'},
    {airline: 'dal', time: '14:54:48'},
    {airline: 'jbu', time: '12:35:48'},
    {airline: 'fft', time: '15:19:09'},
    {airline: 'dal', time: '15:25:31'},
    {airline: 'dal', time: '13:08:48'},
    {airline: 'nks', time: '08:43:34'},
    {airline: 'swa', time: '07:33:16'},
    {airline: 'ual', time: '13:41:07'},
    {airline: 'ual', time: '16:10:29'},
    {airline: 'ual', time: '19:14:39'},
    {airline: 'dal', time: '15:08:09'},
    {airline: 'dal', time: '11:26:16'},
    {airline: 'ual', time: '19:52:59'},
    {airline: 'ual', time: '12:20:25'},
    {airline: 'swa', time: '13:44:53'},
    {airline: 'ual', time: '15:02:11'},
    {airline: 'ual', time: '10:21:00'},
    {airline: 'jbu', time: '15:18:32'},
    {airline: 'dal', time: '15:45:20'},
    {airline: 'dal', time: '14:52:02'},
    {airline: 'swa', time: '14:11:00'},
    {airline: 'swa', time: '12:33:39'},
    {airline: 'dal', time: '08:55:35'},
    {airline: 'aal', time: '11:10:38'},
    {airline: 'fft', time: '13:11:58'},
    {airline: 'aal', time: '14:44:01'},
    {airline: 'ual', time: '16:05:00'},
    {airline: 'ual', time: '10:31:25'},
    {airline: 'swa', time: '15:13:47'},
    {airline: 'dal', time: '15:43:43'},
    {airline: 'swa', time: '11:56:30'},
    {airline: 'swa', time: '10:44:56'},
    {airline: 'ual', time: '15:28:29'},
    {airline: 'nks', time: '15:35:01'},
    {airline: 'jbu', time: '13:21:32'},
    {airline: 'aal', time: '14:20:40'},
    {airline: 'ual', time: '09:33:45'},
    {airline: 'swa', time: '06:27:40'},
    {airline: 'fft', time: '15:30:49'},
    {airline: 'swa', time: '12:53:55'},
    {airline: 'ual', time: '10:00:49'},
    {airline: 'aal', time: '09:56:01'},
    {airline: 'swa', time: '11:15:19'},
    {airline: 'aal', time: '15:55:59'},
    {airline: 'ual', time: '01:33:30'},
    {airline: 'swa', time: '17:30:52'},
    {airline: 'aal', time: '05:59:34'},
    {airline: 'ual', time: '11:45:27'},
    {airline: 'aal', time: '17:42:39'},
    {airline: 'ual', time: '18:57:18'},
    {airline: 'dal', time: '15:38:35'},
    {airline: 'swa', time: '09:01:29'},
    {airline: 'ual', time: '02:48:38'},
    {airline: 'fft', time: '17:19:12'},
    {airline: 'jbu', time: '13:17:14'},
    {airline: 'ual', time: '09:04:08'},
    {airline: 'swa', time: '05:41:37'},
    {airline: 'vrd', time: '17:40:52'},
    {airline: 'swa', time: '10:26:30'},
    {airline: 'aal', time: '14:44:01'},
    {airline: 'jbu', time: '04:34:09'},
    {airline: 'ual', time: '15:13:26'},
    {airline: 'dal', time: '08:09:59'},
    {airline: 'dal', time: '17:35:39'},
    {airline: 'ual', time: '15:26:22'},
    {airline: 'dal', time: '14:39:27'},
    {airline: 'aay', time: '18:56:37'},
    {airline: 'hal', time: '11:01:31'},
    {airline: 'ual', time: '20:19:45'},
    {airline: 'swa', time: '19:04:05'},
    {airline: 'nks', time: '21:29:43'},
    {airline: 'ual', time: '13:00:13'},
    {airline: 'ual', time: '09:47:38'},
    {airline: 'hal', time: '11:14:52'},
    {airline: 'hal', time: '20:38:04'},
    {airline: 'ual', time: '11:19:58'},
    {airline: 'dal', time: '18:39:12'},
    {airline: 'ual', time: '15:46:47'},
    {airline: 'swa', time: '19:14:13'},
    {airline: 'jbu', time: '01:41:34'},
    {airline: 'dal', time: '10:46:05'},
    {airline: 'swa', time: '06:26:59'},
    {airline: 'aal', time: '19:03:12'},
    {airline: 'aal', time: '11:02:45'},
    {airline: 'ual', time: '18:05:37'},
    {airline: 'aal', time: '16:04:29'},
    {airline: 'dal', time: '18:59:38'},
    {airline: 'swa', time: '15:18:17'},
    {airline: 'dal', time: '11:41:47'},
    {airline: 'dal', time: '09:55:28'},
    {airline: 'ual', time: '17:48:22'},
    {airline: 'jbu', time: '07:15:20'},
    {airline: 'dal', time: '16:15:50'},
    {airline: 'aal', time: '03:38:21'},
    {airline: 'vrd', time: ''},
    {airline: 'ual', time: '12:46:38'},
    {airline: 'swa', time: '03:58:30'},
    {airline: 'aal', time: '13:00:37'},
    {airline: 'ual', time: '05:45:14'},
    {airline: 'dal', time: '15:51:46'},
    {airline: 'aal', time: '15:52:09'},
    {airline: 'swa', time: '11:47:45'},
    {airline: 'ual', time: '14:06:19'},
    {airline: 'dal', time: '00:59:37'},
    {airline: 'fft', time: '21:40:54'},
    {airline: 'ual', time: '13:45:23'},
    {airline: 'dal', time: '10:29:13'},
    {airline: 'vrd', time: '18:27:29'},
    {airline: 'nks', time: '09:47:24'},
    {airline: 'ual', time: '14:27:54'},
    {airline: 'aal', time: '05:58:33'},
    {airline: 'dal', time: '13:50:34'},
    {airline: 'aal', time: '15:26:22'},
    {airline: 'ual', time: '17:46:59'},
    {airline: 'ual', time: '11:55:10'},
    {airline: 'ual', time: '17:34:22'},
    {airline: 'ual', time: '14:16:09'},
    {airline: 'aal', time: '14:40:38'},
    {airline: 'aal', time: '09:50:16'},
    {airline: 'nks', time: '17:52:34'},
    {airline: 'dal', time: '06:42:11'},
    {airline: 'jbu', time: '09:36:16'},
    {airline: 'jbu', time: '07:18:22'},
    {airline: 'nks', time: '15:39:11'},
    {airline: 'ual', time: '14:24:43'},
    {airline: 'dal', time: '09:07:38'},
    {airline: 'ual', time: '15:28:55'},
    {airline: 'ual', time: '06:52:00'},
    {airline: 'aal', time: '08:54:43'},
    {airline: 'swa', time: '16:41:15'},
    {airline: 'dal', time: '13:54:56'},
    {airline: 'ual', time: '09:32:11'},
    {airline: 'jbu', time: '12:40:57'},
    {airline: 'ual', time: '17:57:22'},
    {airline: 'aal', time: '13:38:41'},
    {airline: 'nks', time: '17:27:07'},
    {airline: 'ual', time: '12:12:53'},
    {airline: 'swa', time: '02:38:56'},
    {airline: 'vrd', time: '15:20:37'},
    {airline: 'dal', time: '13:28:16'},
    {airline: 'dal', time: '06:41:50'},
    {airline: 'aal', time: '10:54:52'},
    {airline: 'dal', time: '15:50:29'},
    {airline: 'aal', time: '16:04:58'},
    {airline: 'ual', time: '16:06:39'},
    {airline: 'swa', time: '09:35:55'},
    {airline: 'aal', time: '22:46:43'},
    {airline: 'asa', time: '15:39:28'},
    {airline: 'swa', time: '09:09:03'},
    {airline: 'jbu', time: '16:39:59'},
    {airline: 'nks', time: '12:21:25'},
    {airline: 'asa', time: '17:59:46'},
    {airline: 'jbu', time: '16:43:45'},
    {airline: 'ual', time: '15:50:01'},
    {airline: 'vrd', time: '10:34:17'},
    {airline: 'aal', time: '12:14:09'},
    {airline: 'aal', time: '11:06:31'},
    {airline: 'ual', time: '22:12:51'},
    {airline: 'fft', time: '12:06:55'},
    {airline: 'aal', time: '12:28:50'},
    {airline: 'aal', time: '13:43:53'},
    {airline: 'ual', time: '16:56:31'},
    {airline: 'dal', time: '15:20:06'},
    {airline: 'aal', time: '18:26:35'},
    {airline: 'aal', time: '05:49:12'},
    {airline: 'aal', time: '18:19:18'},
    {airline: 'aal', time: '11:54:35'},
    {airline: 'swa', time: '07:37:24'},
    {airline: 'aal', time: '01:41:23'},
    {airline: 'aal', time: '15:11:31'},
    {airline: 'dal', time: '01:35:03'},
    {airline: 'ual', time: '08:39:00'},
    {airline: 'ual', time: '05:30:55'},
    {airline: 'aal', time: '08:28:14'},
    {airline: 'aal', time: '07:31:09'},
    {airline: 'dal', time: '13:05:44'},
    {airline: 'ual', time: '12:11:01'},
    {airline: 'swa', time: '19:25:16'},
    {airline: 'swa', time: '10:17:52'},
    {airline: 'ual', time: '14:12:45'},
    {airline: 'aal', time: '11:53:10'},
    {airline: 'dal', time: '17:06:17'},
    {airline: 'asa', time: '11:16:55'},
    {airline: 'swa', time: '09:53:02'},
    {airline: 'dal', time: '13:15:07'},
    {airline: 'aal', time: '20:45:00'},
    {airline: 'ual', time: '18:57:52'},
    {airline: 'aal', time: '17:24:42'},
    {airline: 'jbu', time: '20:57:24'},
    {airline: 'dal', time: '09:34:41'},
    {airline: 'dal', time: '14:28:15'},
    {airline: 'aal', time: '12:02:14'},
    {airline: 'swa', time: '18:20:23'},
    {airline: 'swa', time: '18:27:09'},
    {airline: 'ual', time: '15:07:43'},
    {airline: 'jbu', time: '16:43:30'},
    {airline: 'swa', time: '14:53:28'},
    {airline: 'swa', time: '13:57:55'},
    {airline: 'ual', time: '15:23:10'},
    {airline: 'ual', time: '00:00:46'},
    {airline: 'swa', time: '10:48:17'},
    {airline: 'swa', time: '01:10:24'},
    {airline: 'ual', time: '08:41:00'},
    {airline: 'aal', time: '06:59:20'},
    {airline: 'swa', time: '11:44:53'},
    {airline: 'ual', time: '15:40:10'},
    {airline: 'dal', time: '18:51:11'},
    {airline: 'swa', time: '18:37:29'},
    {airline: 'scx', time: '09:52:18'},
    {airline: 'nks', time: '12:13:45'},
    {airline: 'hal', time: '13:14:29'},
    {airline: 'aal', time: '09:17:55'},
    {airline: 'dal', time: '03:02:11'},
    {airline: 'asa', time: '09:28:33'},
    {airline: 'swa', time: '13:52:09'},
    {airline: 'swa', time: '14:43:34'},
    {airline: 'fft', time: '11:06:16'},
    {airline: 'fft', time: '06:58:21'},
    {airline: 'swa', time: '21:06:52'},
    {airline: 'dal', time: '14:48:19'},
    {airline: 'dal', time: '05:15:35'},
    {airline: 'swa', time: '12:10:17'},
    {airline: 'vrd', time: '20:48:51'},
    {airline: 'swa', time: '13:54:55'},
    {airline: 'aal', time: '11:39:18'},
    {airline: 'aal', time: '18:32:01'},
    {airline: 'swa', time: '10:29:28'},
    {airline: 'swa', time: '17:26:02'},
    {airline: 'dal', time: '09:21:23'},
    {airline: 'swa', time: '14:24:39'},
    {airline: 'aay', time: '18:23:29'},
    {airline: 'dal', time: '12:49:56'},
    {airline: 'dal', time: '11:57:27'},
    {airline: 'dal', time: '10:53:52'},
    {airline: 'swa', time: '12:51:16'},
    {airline: 'dal', time: '16:45:04'},
    {airline: 'dal', time: '08:56:58'},
    {airline: 'nks', time: '06:53:21'},
    {airline: 'ual', time: '15:13:33'},
    {airline: 'swa', time: '14:24:05'},
    {airline: 'aal', time: '18:10:42'},
    {airline: 'ual', time: '15:17:25'},
    {airline: 'hal', time: '17:50:29'},
    {airline: 'jbu', time: '12:17:03'},
    {airline: 'ual', time: '19:10:56'},
    {airline: 'dal', time: '10:10:50'},
    {airline: 'scx', time: '16:31:47'},
    {airline: 'aal', time: '15:12:07'},
    {airline: 'jbu', time: '09:34:56'},
    {airline: 'aay', time: '10:27:57'},
    {airline: 'ual', time: '07:21:10'},
    {airline: 'dal', time: '23:54:15'},
    {airline: 'fft', time: '10:40:17'},
    {airline: 'aay', time: '18:50:12'},
    {airline: 'aal', time: '14:10:31'},
    {airline: 'aal', time: '10:58:33'},
    {airline: 'aal', time: '02:01:34'},
    {airline: 'fft', time: '16:22:28'},
    {airline: 'asa', time: '14:28:32'},
    {airline: 'ual', time: '06:44:41'},
    {airline: 'aal', time: '11:54:22'},
    {airline: 'dal', time: '11:13:40'},
    {airline: 'aal', time: '13:40:08'},
    {airline: 'aal', time: '13:46:51'},
    {airline: 'nks', time: '17:51:23'},
    {airline: 'aal', time: '23:44:09'},
    {airline: 'aal', time: '06:48:22'},
    {airline: 'dal', time: '11:25:26'},
    {airline: 'vrd', time: '18:09:09'},
    {airline: 'swa', time: '13:52:49'},
    {airline: 'vrd', time: '14:20:06'},
    {airline: 'aal', time: '16:23:57'},
    {airline: 'swa', time: '13:36:42'},
    {airline: 'ual', time: '04:18:30'},
    {airline: 'aal', time: '13:56:16'},
    {airline: 'nks', time: '10:27:07'},
    {airline: 'swa', time: '11:04:57'},
    {airline: 'aal', time: '13:13:26'},
    {airline: 'dal', time: '16:03:45'},
    {airline: 'aal', time: '11:31:27'},
    {airline: 'swa', time: '09:53:48'},
    {airline: 'aal', time: '14:56:03'},
    {airline: 'swa', time: '05:22:05'},
    {airline: 'swa', time: '13:23:48'},
    {airline: 'dal', time: '12:46:25'},
    {airline: 'aal', time: '08:28:55'},
    {airline: 'dal', time: '12:21:55'},
    {airline: 'dal', time: '18:53:08'},
    {airline: 'swa', time: '14:02:39'},
    {airline: 'swa', time: '19:36:47'},
    {airline: 'vrd', time: '13:24:38'},
    {airline: 'nks', time: '16:34:59'},
    {airline: 'swa', time: '06:22:30'},
    {airline: 'ual', time: '17:28:06'},
    {airline: 'jbu', time: '14:57:05'},
    {airline: 'ual', time: '13:52:07'},
    {airline: 'ual', time: '10:43:04'},
    {airline: 'swa', time: '09:31:10'},
    {airline: 'ual', time: '17:25:06'},
    {airline: 'hal', time: '15:48:27'},
    {airline: 'aal', time: '09:15:42'},
    {airline: 'ual', time: '12:05:42'},
    {airline: 'swa', time: '07:43:11'},
    {airline: 'swa', time: '12:02:04'},
    {airline: 'nks', time: '11:02:05'},
    {airline: 'swa', time: '17:37:27'},
    {airline: 'aal', time: '10:14:31'},
    {airline: 'swa', time: '15:29:30'},
    {airline: 'dal', time: '11:15:50'},
    {airline: 'dal', time: '14:31:30'},
    {airline: 'aal', time: '06:09:33'},
    {airline: 'ual', time: '12:10:49'},
    {airline: 'jbu', time: '17:17:25'},
    {airline: 'swa', time: '12:09:13'},
    {airline: 'ual', time: '11:44:47'},
    {airline: 'dal', time: '16:47:16'},
    {airline: 'nks', time: '06:47:43'},
    {airline: 'ual', time: '16:41:51'},
    {airline: 'aal', time: '07:06:38'},
    {airline: 'dal', time: '14:08:06'},
    {airline: 'dal', time: '13:10:41'},
    {airline: 'dal', time: '15:37:24'},
    {airline: 'fft', time: '15:14:59'},
    {airline: 'aal', time: '18:03:05'},
    {airline: 'dal', time: '12:12:36'},
    {airline: 'ual', time: '14:20:36'},
    {airline: 'swa', time: '15:43:52'},
    {airline: 'dal', time: '15:15:33'},
    {airline: 'aal', time: '14:20:16'},
    {airline: 'scx', time: '07:01:10'},
    {airline: 'dal', time: '11:20:21'},
    {airline: 'scx', time: '11:58:38'},
    {airline: 'ual', time: '11:33:06'},
    {airline: 'fft', time: '18:49:14'},
    {airline: 'ual', time: '13:39:51'},
    {airline: 'nks', time: '09:06:19'},
    {airline: 'nks', time: '10:08:48'},
    {airline: 'swa', time: '11:26:50'},
    {airline: 'aal', time: '10:01:13'},
    {airline: 'aal', time: '10:53:46'},
    {airline: 'dal', time: '09:14:08'},
    {airline: 'aal', time: '20:02:46'},
    {airline: 'dal', time: '13:08:01'},
    {airline: 'dal', time: '23:16:04'},
    {airline: 'ual', time: '14:37:44'},
    {airline: 'swa', time: '02:08:01'},
    {airline: 'dal', time: '15:44:50'},
    {airline: 'fft', time: '18:02:06'},
    {airline: 'vrd', time: '14:47:49'},
    {airline: 'dal', time: '07:38:21'},
    {airline: 'aal', time: '13:24:16'},
    {airline: 'fft', time: '20:44:11'},
    {airline: 'swa', time: '13:34:18'},
    {airline: 'ual', time: '13:13:30'},
    {airline: 'aal', time: '09:20:37'},
    {airline: 'jbu', time: '11:22:52'},
    {airline: 'ual', time: '13:07:14'},
    {airline: 'ual', time: '18:30:07'},
    {airline: 'aal', time: '05:38:27'},
    {airline: 'scx', time: '08:20:29'},
    {airline: 'ual', time: '17:24:41'},
    {airline: 'ual', time: '06:11:29'},
    {airline: 'dal', time: '13:15:52'},
    {airline: 'vrd', time: '12:26:10'},
    {airline: 'fft', time: '15:17:56'},
    {airline: 'swa', time: '17:01:58'},
    {airline: 'nks', time: '03:33:12'},
    {airline: 'ual', time: '09:05:17'},
    {airline: 'fft', time: '07:19:07'},
    {airline: 'dal', time: '15:39:04'},
    {airline: 'aal', time: '15:08:04'},
    {airline: 'dal', time: '08:13:35'},
    {airline: 'dal', time: '11:19:35'},
    {airline: 'asa', time: '20:59:40'},
    {airline: 'dal', time: '11:56:27'},
    {airline: 'swa', time: '10:38:19'},
    {airline: 'aal', time: '09:40:58'},
    {airline: 'aal', time: '20:36:09'},
    {airline: 'dal', time: '09:35:54'},
    {airline: 'vrd', time: '10:17:28'},
    {airline: 'aal', time: '16:46:17'},
    {airline: 'aal', time: '20:50:29'},
    {airline: 'aal', time: '12:04:21'},
    {airline: 'swa', time: '17:04:12'},
    {airline: 'aal', time: '13:33:41'},
    {airline: 'ual', time: '17:47:15'},
    {airline: 'fft', time: '06:28:33'},
    {airline: 'aay', time: '19:17:33'},
    {airline: 'dal', time: '14:34:18'},
    {airline: 'swa', time: '08:11:35'},
    {airline: 'ual', time: '13:16:18'},
    {airline: 'vrd', time: '06:55:36'},
    {airline: 'aal', time: '01:51:14'},
    {airline: 'ual', time: '12:07:08'},
    {airline: 'fft', time: '15:48:38'},
    {airline: 'swa', time: '06:19:28'},
    {airline: 'jbu', time: '17:58:42'},
    {airline: 'ual', time: '18:15:20'},
    {airline: 'aal', time: '18:33:28'},
    {airline: 'hal', time: '16:15:46'},
    {airline: 'ual', time: '09:46:33'},
    {airline: 'aal', time: '07:02:07'},
    {airline: 'ual', time: '11:07:57'},
    {airline: 'swa', time: '13:14:18'},
    {airline: 'dal', time: '15:50:14'},
    {airline: 'aal', time: '07:24:59'},
    {airline: 'fft', time: '13:03:13'},
    {airline: 'swa', time: '12:20:56'},
    {airline: 'dal', time: '12:10:46'},
    {airline: 'ual', time: '07:05:24'},
    {airline: 'ual', time: '14:42:17'},
    {airline: 'aal', time: '07:38:38'},
    {airline: 'aal', time: '14:56:48'},
    {airline: 'nks', time: '12:50:51'},
    {airline: 'dal', time: '20:10:11'},
    {airline: 'ual', time: '13:28:50'},
    {airline: 'nks', time: '14:27:22'},
    {airline: 'aal', time: '10:45:37'},
    {airline: 'nks', time: '15:59:59'},
    {airline: 'aal', time: '19:45:36'},
    {airline: 'dal', time: '17:47:43'},
    {airline: 'dal', time: '06:48:25'},
    {airline: 'dal', time: '00:57:41'},
    {airline: 'fft', time: '06:41:49'},
    {airline: 'swa', time: '03:43:36'},
    {airline: 'dal', time: '11:18:10'},
    {airline: 'nks', time: '10:03:07'},
    {airline: 'dal', time: '04:23:42'},
    {airline: 'aal', time: '07:05:14'},
    {airline: 'swa', time: '05:36:16'},
    {airline: 'aal', time: '13:41:51'},
    {airline: 'aal', time: '16:33:19'},
    {airline: 'aal', time: '09:04:52'},
    {airline: 'swa', time: '16:17:30'},
    {airline: 'nks', time: '11:37:27'},
    {airline: 'dal', time: '04:38:02'},
    {airline: 'asa', time: '15:25:21'},
    {airline: 'swa', time: '13:16:45'},
    {airline: 'fft', time: '12:57:49'},
    {airline: 'jbu', time: '05:41:31'},
    {airline: 'ual', time: '11:05:16'},
    {airline: 'dal', time: '09:40:25'},
    {airline: 'ual', time: '10:04:41'},
    {airline: 'jbu', time: '04:53:08'},
    {airline: 'ual', time: '17:15:07'},
    {airline: 'swa', time: '13:33:38'},
    {airline: 'swa', time: '18:28:49'},
    {airline: 'ual', time: '02:51:43'},
    {airline: 'swa', time: '13:09:46'},
    {airline: 'aal', time: '12:41:19'},
    {airline: 'dal', time: '11:56:09'},
    {airline: 'dal', time: '18:19:24'},
    {airline: 'dal', time: '13:32:34'},
    {airline: 'dal', time: '16:10:19'},
    {airline: 'aal', time: '10:47:01'},
    {airline: 'ual', time: '17:11:42'},
    {airline: 'swa', time: '13:14:17'},
    {airline: 'ual', time: '13:34:18'},
    {airline: 'asa', time: '16:18:31'},
    {airline: 'jbu', time: '18:10:43'},
    {airline: 'ual', time: '18:55:51'},
    {airline: 'fft', time: '02:42:23'},
    {airline: 'nks', time: '18:39:15'},
    {airline: 'fft', time: '15:40:39'},
    {airline: 'nks', time: '14:24:31'},
    {airline: 'ual', time: '20:17:00'},
    {airline: 'swa', time: '10:05:09'},
    {airline: 'ual', time: '15:33:36'},
    {airline: 'nks', time: '11:27:43'},
    {airline: 'nks', time: '09:15:48'},
    {airline: 'fft', time: '14:01:48'},
    {airline: 'swa', time: '16:06:14'},
    {airline: 'jbu', time: '08:15:30'},
    {airline: 'aal', time: '10:01:50'},
    {airline: 'hal', time: '10:40:31'},
    {airline: 'aal', time: '16:43:23'},
    {airline: 'jbu', time: '16:03:23'},
    {airline: 'ual', time: '15:17:52'},
    {airline: 'ual', time: '18:54:34'},
    {airline: 'vrd', time: '09:18:00'},
    {airline: 'dal', time: '15:51:55'},
    {airline: 'swa', time: '12:53:45'},
    {airline: 'fft', time: '09:23:18'},
    {airline: 'vrd', time: '06:38:30'},
    {airline: 'dal', time: '12:39:26'},
    {airline: 'swa', time: '17:39:46'},
    {airline: 'fft', time: '00:54:50'},
    {airline: 'swa', time: '10:32:17'},
    {airline: 'ual', time: '11:51:49'},
    {airline: 'swa', time: '12:08:58'},
    {airline: 'jbu', time: '10:32:14'},
    {airline: 'swa', time: '11:22:51'},
    {airline: 'swa', time: '07:56:20'},
    {airline: 'dal', time: '10:02:39'},
    {airline: 'dal', time: '16:55:11'},
    {airline: 'aal', time: '20:01:21'},
    {airline: 'fft', time: '15:05:44'},
    {airline: 'nks', time: '13:09:24'},
    {airline: 'nks', time: '18:04:11'},
    {airline: 'aal', time: '16:27:04'},
    {airline: 'aal', time: '18:44:44'},
    {airline: 'scx', time: '13:54:53'},
    {airline: 'scx', time: '13:18:29'},
    {airline: 'ual', time: '16:54:06'},
    {airline: 'scx', time: '12:10:50'},
    {airline: 'swa', time: '19:54:20'},
    {airline: 'aal', time: '12:31:58'},
    {airline: 'nks', time: '01:44:49'},
    {airline: 'aal', time: '15:04:01'},
    {airline: 'aay', time: '11:28:47'},
    {airline: 'ual', time: '15:24:24'},
    {airline: 'nks', time: '06:11:28'},
    {airline: 'fft', time: '05:19:24'},
    {airline: 'dal', time: '18:14:56'},
    {airline: 'aal', time: '09:29:05'},
    {airline: 'fft', time: '17:29:21'},
    {airline: 'aal', time: '01:53:24'},
    {airline: 'aay', time: '13:33:58'},
    {airline: 'ual', time: '08:40:52'},
    {airline: 'swa', time: '17:49:59'},
    {airline: 'swa', time: '06:40:53'},
    {airline: 'dal', time: '05:16:46'},
    {airline: 'aal', time: '15:36:43'},
    {airline: 'aal', time: '06:40:22'},
    {airline: 'swa', time: '10:17:27'},
    {airline: 'ual', time: '12:36:47'},
    {airline: 'vrd', time: 'abc'},
    {airline: 'jbu', time: '10:34:43'},
    {airline: 'nks', time: '16:51:18'},
    {airline: 'swa', time: '10:35:20'},
    {airline: 'ual', time: '06:06:01'},
    {airline: 'ual', time: '16:05:41'},
    {airline: 'jbu', time: '09:26:14'},
    {airline: 'nks', time: '20:00:20'},
    {airline: 'fft', time: '17:18:23'},
    {airline: 'aal', time: '15:44:35'},
    {airline: 'jbu', time: '11:22:13'},
    {airline: 'aal', time: '17:56:24'},
    {airline: 'aal', time: '14:42:57'},
    {airline: 'aal', time: '10:27:29'},
    {airline: 'scx', time: '15:19:14'},
    {airline: 'nks', time: '06:13:42'},
    {airline: 'ual', time: '15:37:12'},
    {airline: 'ual', time: '06:20:40'},
    {airline: 'aay', time: '15:36:00'},
    {airline: 'ual', time: '12:11:34'},
    {airline: 'ual', time: '09:51:32'},
    {airline: 'swa', time: '15:22:33'},
    {airline: 'fft', time: '12:22:56'},
    {airline: 'ual', time: '15:07:36'},
    {airline: 'aal', time: '13:05:33'},
    {airline: 'swa', time: '20:27:54'},
    {airline: 'fft', time: '16:28:14'},
    {airline: 'aal', time: '13:14:19'},
    {airline: 'aal', time: '19:49:40'},
    {airline: 'ual', time: '15:38:35'},
    {airline: 'hal', time: '09:32:22'},
    {airline: 'ual', time: '16:36:51'},
    {airline: 'ual', time: '18:03:47'},
    {airline: 'swa', time: '06:58:33'},
    {airline: 'dal', time: '15:19:31'},
    {airline: 'hal', time: '06:14:28'},
    {airline: 'fft', time: '10:24:49'},
    {airline: 'fft', time: '11:34:37'},
    {airline: 'asa', time: '22:06:17'},
    {airline: 'asa', time: '09:41:50'},
    {airline: 'ual', time: '15:58:03'},
    {airline: 'fft', time: '17:36:44'},
    {airline: 'dal', time: '12:28:06'},
    {airline: 'ual', time: '11:34:28'},
    {airline: 'swa', time: '16:48:29'},
    {airline: 'aal', time: '16:53:09'},
    {airline: 'ual', time: '12:42:24'},
    {airline: 'dal', time: '18:40:36'},
    {airline: 'swa', time: '20:07:18'},
    {airline: 'nks', time: '21:58:12'},
    {airline: 'scx', time: '11:20:57'},
    {airline: 'asa', time: '17:26:02'},
    {airline: 'dal', time: '09:07:15'},
    {airline: 'swa', time: '17:16:53'},
    {airline: 'ual', time: '14:53:23'},
    {airline: 'nks', time: '16:36:53'},
    {airline: 'fft', time: '07:56:07'},
    {airline: 'swa', time: '10:55:25'},
    {airline: 'swa', time: '14:00:38'},
    {airline: 'aal', time: '16:16:29'},
    {airline: 'swa', time: '13:55:19'},
    {airline: 'ual', time: '10:19:48'},
    {airline: 'swa', time: '13:58:58'},
    {airline: 'nks', time: '12:47:10'},
    {airline: 'aal', time: '04:25:04'},
    {airline: 'dal', time: '17:55:19'},
    {airline: 'aal', time: '17:15:26'},
    {airline: 'ual', time: '21:47:10'},
    {airline: 'aal', time: '17:58:59'},
    {airline: 'aal', time: '06:28:58'},
    {airline: 'nks', time: '06:48:34'},
    {airline: 'dal', time: '12:55:54'},
    {airline: 'ual', time: '10:25:05'},
    {airline: 'swa', time: '17:42:34'},
    {airline: 'aal', time: '19:42:10'},
    {airline: 'dal', time: '15:09:38'},
    {airline: 'swa', time: '18:50:32'},
    {airline: 'fft', time: '11:52:50'},
    {airline: 'aal', time: '16:51:11'},
    {airline: 'aal', time: '12:20:16'},
    {airline: 'dal', time: '12:56:55'},
    {airline: 'scx', time: '13:04:47'},
    {airline: 'dal', time: '09:51:39'},
    {airline: 'scx', time: '12:04:12'},
    {airline: 'aal', time: '10:15:05'},
    {airline: 'dal', time: '11:30:33'},
    {airline: 'fft', time: '22:36:05'},
    {airline: 'dal', time: '07:35:54'},
    {airline: 'ual', time: '15:07:37'},
    {airline: 'dal', time: '22:51:39'},
    {airline: 'ual', time: '06:20:04'},
    {airline: 'jbu', time: '11:45:34'},
    {airline: 'swa', time: '12:03:19'},
    {airline: 'ual', time: '10:20:19'},
    {airline: 'aal', time: '14:29:11'},
    {airline: 'ual', time: '12:37:55'},
    {airline: 'dal', time: '15:12:19'},
    {airline: 'swa', time: '18:09:03'},
    {airline: 'dal', time: '13:48:26'},
    {airline: 'ual', time: '14:50:41'},
    {airline: 'swa', time: '12:38:13'},
    {airline: 'fft', time: '12:15:36'},
    {airline: 'aal', time: '05:16:08'},
    {airline: 'dal', time: '07:56:53'},
    {airline: 'aal', time: '12:57:49'},
    {airline: 'ual', time: '18:16:17'},
    {airline: 'aal', time: '17:34:24'},
    {airline: 'jbu', time: '05:12:07'},
    {airline: 'dal', time: '17:47:28'},
    {airline: 'dal', time: '04:06:37'},
    {airline: 'dal', time: '09:37:32'},
    {airline: 'ual', time: '11:28:19'},
    {airline: 'aal', time: '18:35:43'},
    {airline: 'dal', time: '13:18:54'},
    {airline: 'asa', time: '18:15:15'},
    {airline: 'ual', time: '06:09:28'},
    {airline: 'dal', time: '11:06:10'},
    {airline: 'aal', time: '10:57:17'},
    {airline: 'aal', time: '11:54:51'},
    {airline: 'nks', time: '13:41:03'},
    {airline: 'hal', time: '11:56:48'},
    {airline: 'jbu', time: '21:23:40'},
    {airline: 'aay', time: '06:36:30'},
    {airline: 'swa', time: '02:28:35'},
    {airline: 'ual', time: '15:54:15'},
    {airline: 'vrd', time: '11:44:36'},
    {airline: 'aal', time: '14:46:20'},
    {airline: 'aal', time: '14:22:16'},
    {airline: 'asa', time: '09:37:53'},
    {airline: 'swa', time: '16:44:38'},
    {airline: 'jbu', time: '11:53:22'},
    {airline: 'jbu', time: '09:28:09'},
    {airline: 'asa', time: '16:13:01'},
    {airline: 'swa', time: '11:38:51'},
    {airline: 'aal', time: '18:11:13'},
    {airline: 'asa', time: '09:22:02'},
    {airline: 'nks', time: '18:44:09'},
    {airline: 'swa', time: '01:22:03'},
    {airline: 'swa', time: '15:30:34'},
    {airline: 'jbu', time: '09:51:53'},
    {airline: 'ual', time: '18:08:19'},
    {airline: 'ual', time: '09:41:58'},
    {airline: 'swa', time: '18:59:17'},
    {airline: 'swa', time: '09:55:42'},
    {airline: 'swa', time: '17:01:57'},
    {airline: 'dal', time: '11:53:12'},
    {airline: 'aal', time: '18:00:24'},
    {airline: 'swa', time: '18:24:38'},
    {airline: 'fft', time: '13:23:43'},
    {airline: 'swa', time: '13:36:22'},
    {airline: 'dal', time: '07:36:48'},
    {airline: 'ual', time: '22:25:14'},
    {airline: 'swa', time: '13:57:20'},
    {airline: 'nks', time: '14:02:26'},
    {airline: 'asa', time: '20:31:17'},
    {airline: 'jbu', time: '11:28:28'},
    {airline: 'dal', time: '16:29:06'},
    {airline: 'swa', time: '16:21:50'},
    {airline: 'fft', time: '13:01:42'},
    {airline: 'dal', time: '14:46:12'},
    {airline: 'asa', time: '09:41:25'},
    {airline: 'aal', time: '11:56:20'},
    {airline: 'fft', time: '20:25:30'},
    {airline: 'swa', time: '14:56:01'},
    {airline: 'dal', time: '18:39:59'},
    {airline: 'ual', time: '11:51:23'},
    {airline: 'dal', time: '23:51:01'},
    {airline: 'jbu', time: '16:22:29'},
    {airline: 'fft', time: '10:34:01'},
    {airline: 'jbu', time: '15:34:35'},
    {airline: 'swa', time: '16:36:19'},
    {airline: 'dal', time: '14:35:44'},
    {airline: 'aal', time: '09:37:34'},
    {airline: 'aal', time: '05:12:32'},
    {airline: 'swa', time: '17:59:55'},
    {airline: 'dal', time: '00:10:44'},
    {airline: 'swa', time: '17:19:53'},
    {airline: 'ual', time: '13:25:22'},
    {airline: 'aal', time: '17:29:26'},
    {airline: 'aal', time: '09:06:46'},
    {airline: 'aal', time: '14:41:26'},
    {airline: 'dal', time: '11:14:15'},
    {airline: 'aal', time: '12:49:32'},
    {airline: 'swa', time: '16:36:01'},
    {airline: 'nks', time: '17:34:25'},
    {airline: 'hal', time: '11:21:33'},
    {airline: 'aal', time: '14:14:14'},
    {airline: 'scx', time: '15:50:39'},
    {airline: 'ual', time: '20:30:37'},
    {airline: 'ual', time: '18:34:37'},
    {airline: 'aal', time: '14:32:17'},
    {airline: 'scx', time: '16:56:30'},
    {airline: 'aal', time: '17:14:01'},
    {airline: 'ual', time: '22:50:48'},
    {airline: 'dal', time: '16:54:52'},
    {airline: 'ual', time: '12:07:43'},
    {airline: 'hal', time: '20:52:23'},
    {airline: 'jbu', time: '16:49:08'},
    {airline: 'aal', time: '17:56:10'},
    {airline: 'dal', time: '17:36:02'},
    {airline: 'swa', time: '10:31:19'},
    {airline: 'dal', time: '07:46:27'},
    {airline: 'swa', time: '23:33:47'},
    {airline: 'dal', time: '09:10:34'},
    {airline: 'jbu', time: '17:00:57'},
    {airline: 'swa', time: '14:58:27'},
    {airline: 'asa', time: '14:36:34'},
    {airline: 'dal', time: '14:40:58'},
    {airline: 'aal', time: '12:13:55'},
    {airline: 'vrd', time: '14:51:22'},
    {airline: 'ual', time: '12:14:34'},
    {airline: 'ual', time: '10:02:16'},
    {airline: 'ual', time: '04:00:20'},
    {airline: 'hal', time: '11:18:17'},
    {airline: 'aal', time: '14:43:06'},
    {airline: 'swa', time: '02:52:39'},
    {airline: 'fft', time: '11:23:19'},
    {airline: 'jbu', time: '11:43:46'},
    {airline: 'dal', time: '21:28:46'},
    {airline: 'dal', time: '09:53:24'},
    12,
    {airline: 'ual', time: '17:18:05'},
    {airline: 'ual', time: '15:57:28'},
    {airline: 'ual', time: '08:41:23'},
    {airline: 'dal', time: '05:14:18'},
    {airline: 'nks', time: '13:22:37'},
    {airline: 'aal', time: '18:55:06'},
    {airline: 'ual', time: '10:28:42'},
    {airline: 'aal', time: '05:08:48'},
    {airline: 'hal', time: '08:22:13'},
    {airline: 'nks', time: '08:36:28'},
    {airline: 'dal', time: '16:40:46'},
    {airline: 'ual', time: '18:21:02'},
    {airline: 'jbu', time: '08:19:15'},
    {airline: 'swa', time: '22:24:57'},
    {airline: 'swa', time: '11:45:09'},
    {airline: 'jbu', time: '10:27:49'},
    {airline: 'ual', time: '10:38:39'},
    {airline: 'fft', time: '14:57:48'},
    {airline: 'hal', time: '16:29:31'},
    {airline: 'aal', time: '13:41:52'},
    {airline: 'swa', time: '12:10:30'},
    {airline: 'dal', time: '14:15:47'},
    {airline: 'aal', time: '09:33:04'},
    {airline: 'ual', time: '15:59:04'},
    {airline: 'nks', time: '17:05:22'},
    {airline: 'fft', time: '13:51:03'},
    {airline: 'aal', time: '06:58:59'},
    {airline: 'dal', time: '14:28:39'},
    {airline: 'dal', time: '22:08:22'},
    {airline: 'swa', time: '13:50:35'},
    {airline: 'aal', time: '05:15:32'},
    {airline: 'aal', time: '12:18:53'},
    {airline: 'aal', time: '13:58:32'},
    {airline: 'fft', time: '14:56:27'},
    {airline: 'swa', time: '16:52:11'},
    {airline: 'swa', time: '06:21:34'},
    {airline: 'aal', time: '16:10:05'},
    {airline: 'aal', time: '12:10:52'},
    {airline: 'ual', time: '12:51:49'},
    {airline: 'aal', time: '07:41:37'},
    {airline: 'nks', time: '16:20:44'},
    {airline: 'swa', time: '07:51:23'},
    {airline: 'swa', time: '18:50:24'},
    {airline: 'fft', time: '14:30:26'},
    {airline: 'dal', time: '11:59:42'},
    {airline: 'swa', time: '09:00:28'},
    {airline: 'ual', time: '10:58:51'},
    {airline: 'swa', time: '10:11:35'},
    {airline: 'aal', time: '14:24:21'},
    {airline: 'jbu', time: '12:22:22'},
    {airline: 'vrd', time: '12:50:11'},
    {airline: 'ual', time: '12:19:47'},
    {airline: 'jbu', time: '06:14:42'},
    {airline: 'aal', time: '17:03:08'},
    {airline: 'ual', time: '10:29:41'},
    {airline: 'ual', time: '13:38:10'},
    {airline: 'nks', time: '14:42:01'},
    {airline: 'swa', time: '12:35:21'},
    {airline: 'ual', time: '19:02:40'},
    {airline: 'fft', time: '13:05:16'},
    {airline: 'swa', time: '18:45:47'},
    {airline: 'aal', time: '10:55:00'},
    {airline: 'aal', time: '20:02:02'},
    {airline: 'dal', time: '07:53:24'},
    {airline: 'ual', time: '20:33:43'},
    {airline: 'aal', time: '14:55:09'},
    {airline: 'fft', time: '06:03:01'},
    {airline: 'jbu', time: '18:32:15'},
    {airline: 'swa', time: '12:37:23'},
    {airline: 'nks', time: '09:56:27'},
    {airline: 'ual', time: '13:04:52'},
    {airline: 'swa', time: '10:49:56'},
    {airline: 'swa', time: '17:23:17'},
    {airline: 'swa', time: '18:38:53'},
    {airline: 'nks', time: '11:44:32'},
    {airline: 'nks', time: '17:25:25'},
    {airline: 'aal', time: '15:02:41'},
    {airline: 'swa', time: '19:59:09'},
    {airline: 'nks', time: '15:27:53'},
    {airline: 'swa', time: '00:57:43'},
    {airline: 'aal', time: '07:46:32'},
    {airline: 'aay', time: '13:35:00'},
    {airline: 'aal', time: '13:42:44'},
    {airline: 'ual', time: '10:31:38'},
    {airline: 'aal', time: '18:18:30'},
    {airline: 'dal', time: '15:34:32'},
    {airline: 'swa', time: '08:19:49'},
    {airline: 'dal', time: '18:53:12'},
    {airline: 'dal', time: '13:14:39'},
    {airline: 'dal', time: '15:18:13'},
    {airline: 'swa', time: '19:47:41'},
    {airline: 'swa', time: '18:25:08'},
    {airline: 'swa', time: '15:38:37'},
    {airline: 'swa', time: '11:33:27'},
    {airline: 'ual', time: '09:22:43'},
    {airline: 'swa', time: '20:55:19'},
    {airline: 'ual', time: '08:18:46'},
    {airline: 'ual', time: '13:07:33'},
    {airline: 'aay', time: '16:03:43'},
    {airline: 'ual', time: '13:15:49'},
    {airline: 'jbu', time: '02:45:02'},
    {airline: 'aal', time: '11:35:47'},
    {airline: 'aal', time: '23:45:58'},
    {airline: 'jbu', time: '05:40:11'},
    {airline: 'dal', time: '17:54:15'},
    {airline: 'dal', time: '18:36:55'},
    {airline: 'jbu', time: '08:26:16'},
    {airline: 'aay', time: '17:07:21'},
    {airline: 'dal', time: '00:52:00'},
    {airline: 'ual', time: '12:40:18'},
    {airline: 'swa', time: '16:15:14'},
    {airline: 'nks', time: '16:45:38'},
    {airline: 'ual', time: '09:36:28'},
    {airline: 'swa', time: '19:32:04'},
    {airline: 'swa', time: '11:23:36'},
    {airline: 'dal', time: '14:05:30'},
    {airline: 'aay', time: '10:36:53'},
    {airline: 'dal', time: '11:59:19'},
    {airline: 'swa', time: '05:39:06'},
    {airline: 'jbu', time: '10:50:05'},
    {airline: 'fft', time: '12:11:52'},
    {airline: 'nks', time: '02:51:51'},
    {airline: 'ual', time: '23:56:16'},
    {airline: 'nks', time: '13:09:09'},
    {airline: 'ual', time: '11:31:18'},
    {airline: 'vrd', time: '09:08:47'},
    {airline: 'dal', time: '18:13:29'},
    {airline: 'ual', time: '15:10:09'},
    {airline: 'fft', time: '20:19:17'},
    {airline: 'swa', time: '13:34:38'},
    {airline: 'ual', time: '17:06:48'},
    {airline: 'swa', time: '23:57:35'},
    {airline: 'jbu', time: '10:19:43'},
    {airline: 'swa', time: '06:43:14'},
    {airline: 'swa', time: '15:22:02'},
    {airline: 'ual', time: '14:58:16'},
    {airline: 'fft', time: '17:37:38'},
    {airline: 'swa', time: '22:46:05'},
    {airline: 'aal', time: '11:04:55'},
    {airline: 'aal', time: '17:43:41'},
    {airline: 'nks', time: '18:25:51'},
    {airline: 'fft', time: '17:00:43'},
    {airline: 'aal', time: '11:09:42'},
    {airline: 'swa', time: '13:22:21'},
    {airline: 'dal', time: '08:34:11'},
    {airline: 'scx', time: '14:21:45'},
    {airline: 'jbu', time: '12:11:27'},
    {airline: 'dal', time: '18:46:13'},
    {airline: 'dal', time: '15:26:20'},
    {airline: 'ual', time: '13:41:16'},
    {airline: 'dal', time: '16:01:24'},
    {airline: 'swa', time: '21:39:53'},
    {airline: 'aal', time: '12:04:41'},
    {airline: 'aal', time: '17:13:53'},
    {airline: 'dal', time: '04:42:55'},
    {airline: 'jbu', time: '13:10:19'},
    {airline: 'aal', time: '00:58:27'},
    {airline: 'dal', time: '09:34:53'},
    {airline: 'ual', time: '18:28:57'},
    {airline: 'swa', time: '17:21:25'},
    {airline: 'vrd', time: '18:42:48'},
    {airline: 'swa', time: '06:52:53'},
    {airline: 'aal', time: '09:31:14'},
    {airline: 'dal', time: '13:08:44'},
    {airline: 'swa', time: '09:12:56'},
    {airline: 'aal', time: '09:48:30'},
    {airline: 'swa', time: '19:34:26'},
    {airline: 'aal', time: '06:50:55'},
    {airline: 'swa', time: '04:25:10'},
    {airline: 'ual', time: '17:12:36'},
    {airline: 'dal', time: '14:02:33'},
    {airline: 'fft', time: '16:31:03'},
    {airline: 'aal', time: '09:02:34'},
    {airline: 'swa', time: '09:50:06'},
    {airline: 'aal', time: '05:10:24'},
    {airline: 'ual', time: '14:07:07'},
    {airline: 'asa', time: '17:37:17'},
    {airline: 'aal', time: '14:25:28'},
    {airline: 'swa', time: '15:23:23'},
    {airline: 'swa', time: '11:09:29'},
    {airline: 'nks', time: '15:10:21'},
    {airline: 'swa', time: '12:42:58'},
    {airline: 'aal', time: '11:38:43'},
    {airline: 'jbu', time: '17:35:07'},
    {airline: 'scx', time: '13:25:22'},
    {airline: 'fft', time: '16:36:11'},
    {airline: 'swa', time: '18:35:59'},
    {airline: 'dal', time: '20:44:30'},
    {airline: 'dal', time: '05:43:58'},
    {airline: 'ual', time: '00:47:07'},
    {airline: 'ual', time: '13:29:27'},
    {airline: 'aal', time: '11:13:01'},
    {airline: 'swa', time: '03:58:45'},
    {airline: 'hal', time: '06:56:25'},
    {airline: 'fft', time: '20:12:54'},
    {airline: 'ual', time: '06:47:19'},
    {airline: 'aal', time: '17:54:46'},
    {airline: 'ual', time: '11:37:43'},
    {airline: 'dal', time: '17:33:06'},
    {airline: 'aal', time: '12:37:06'},
    {airline: 'swa', time: '19:58:58'},
    {airline: 'swa', time: '02:05:34'},
    {airline: 'swa', time: '18:23:48'},
    {airline: 'dal', time: '12:04:28'},
    {airline: 'swa', time: '17:02:51'},
    {airline: 'dal', time: '16:06:26'},
    {airline: 'jbu', time: '13:12:05'},
    {airline: 'dal', time: '11:33:54'},
    {airline: 'ual', time: '09:24:34'},
    {airline: 'jbu', time: '14:58:11'},
    {airline: 'swa', time: '17:13:19'},
    {airline: 'ual', time: '11:54:22'},
    {airline: 'ual', time: '06:10:16'},
    {airline: 'swa', time: '17:16:12'},
    {airline: 'dal', time: '11:24:42'},
    {airline: 'hal', time: '05:16:29'},
    {airline: 'swa', time: '05:19:41'},
    {airline: 'ual', time: '19:54:33'},
    {airline: 'nks', time: '09:05:56'},
    {airline: 'ual', time: '10:44:52'},
    {airline: 'dal', time: '06:15:44'},
    {airline: 'swa', time: '17:55:06'},
    {airline: 'swa', time: '17:55:20'},
    {airline: 'ual', time: '12:56:37'},
    {airline: 'nks', time: '14:41:29'},
    {airline: 'dal', time: '18:10:52'},
    {airline: 'swa', time: '15:30:20'},
    {airline: 'fft', time: '07:12:27'},
    {airline: 'aal', time: '15:00:54'},
    {airline: 'ual', time: '13:50:56'},
    {airline: 'dal', time: '12:56:04'},
    {airline: 'aal', time: '08:27:36'},
    {airline: 'dal', time: '04:20:03'},
    {airline: 'ual', time: '10:52:17'},
    {airline: 'swa', time: '09:07:46'},
    {airline: 'swa', time: '16:45:06'},
    {airline: 'jbu', time: '16:13:02'},
    {airline: 'jbu', time: '22:03:58'},
    {airline: 'ual', time: '13:31:36'},
    {airline: 'aal', time: '13:50:12'},
    {airline: 'ual', time: '15:27:22'},
    {airline: 'ual', time: '11:09:35'},
    {airline: 'dal', time: '07:15:20'},
    {airline: 'jbu', time: '13:43:08'},
    {airline: 'swa', time: '05:35:12'},
    {airline: 'ual', time: '08:15:36'},
    {airline: 'dal', time: '15:36:09'},
    {airline: 'ual', time: '12:23:45'},
    {airline: 'dal', time: '03:01:57'},
    {airline: 'fft', time: '18:06:48'},
    {airline: 'dal', time: '09:10:19'},
    {airline: 'asa', time: '10:39:59'},
    {airline: 'aal', time: '15:51:24'},
    {airline: 'ual', time: '14:15:48'},
    {airline: 'swa', time: '10:45:21'},
    {airline: 'swa', time: '20:31:13'},
    {airline: 'ual', time: '06:32:42'},
    {airline: 'dal', time: '12:26:54'},
    {airline: 'aal', time: '07:17:03'},
    {airline: 'dal', time: '14:03:23'},
    {airline: 'swa', time: '00:36:02'},
    {airline: 'swa', time: '15:05:52'},
    {airline: 'fft', time: '15:22:54'},
    {airline: 'jbu', time: '20:27:32'},
    {airline: 'jbu', time: '09:34:40'},
    {airline: 'dal', time: '07:03:21'},
    {airline: 'swa', time: '15:37:33'},
    {airline: 'ual', time: '10:54:42'},
    {airline: 'jbu', time: '12:37:14'},
    {airline: 'swa', time: '09:30:41'},
    {airline: 'aal', time: '12:17:49'},
    {airline: 'dal', time: '13:11:56'},
    {airline: 'swa', time: '06:40:56'},
    {airline: 'vrd', time: '13:06:39'},
    {airline: 'dal', time: '18:38:49'},
    {airline: 'nks', time: '10:13:18'},
    {airline: 'jbu', time: '20:44:37'},
    {airline: 'jbu', time: '13:21:03'},
    {airline: 'ual', time: '08:43:06'},
    {airline: 'dal', time: '13:42:19'},
    {airline: 'ual', time: '12:42:39'},
    {airline: 'dal', time: '21:55:20'},
    {airline: 'fft', time: '11:46:39'},
    {airline: 'swa', time: '11:07:18'},
    {airline: 'ual', time: '08:34:20'},
    {airline: 'dal', time: '20:27:49'},
    {airline: 'aal', time: '12:53:49'},
    {airline: 'aal', time: '18:42:33'},
    {airline: 'ual', time: '14:58:05'},
    {airline: 'jbu', time: '09:27:58'},
    {airline: 'fft', time: '11:09:23'},
    {airline: 'swa', time: '10:26:30'},
    {airline: 'aay', time: '14:47:06'},
    {airline: 'dal', time: '12:30:29'},
    {airline: 'ual', time: '10:33:25'},
    {airline: 'dal', time: '10:52:21'},
    {airline: 'aal', time: '08:29:11'},
    {airline: 'ual', time: '09:05:32'},
    {airline: 'dal', time: '15:31:10'},
    {airline: 'swa', time: '18:02:10'},
    {airline: 'swa', time: '16:22:36'},
    {airline: 'asa', time: '06:01:44'},
    {airline: 'jbu', time: '11:25:45'},
    {airline: 'ual', time: '16:33:18'},
    {airline: 'dal', time: '16:40:48'},
    {airline: 'dal', time: '17:26:22'},
    {airline: 'dal', time: '19:24:57'},
    {airline: 'swa', time: '13:55:34'},
    {airline: 'fft', time: '10:11:14'},
    {airline: 'swa', time: '22:18:08'},
    {airline: 'dal', time: '14:35:52'},
    {airline: 'fft', time: '14:03:57'},
    {airline: 'aal', time: '18:41:04'},
    {airline: 'aal', time: '16:11:17'},
    {airline: 'hal', time: '09:46:02'},
    {airline: 'swa', time: '13:15:34'},
    {airline: 'aal', time: '12:44:49'},
    {airline: 'ual', time: '11:49:20'},
    {airline: 'fft', time: '13:52:21'},
    {airline: 'ual', time: '07:58:16'},
    {airline: 'swa', time: '18:59:47'},
    {airline: 'dal', time: '16:34:04'},
    {airline: 'ual', time: '17:47:31'},
    {airline: 'aal', time: '18:30:25'},
    {airline: 'ual', time: '00:25:39'},
    {airline: 'nks', time: '16:19:33'},
    {airline: 'ual', time: '15:48:20'},
    {airline: 'swa', time: '08:36:31'},
    {airline: 'ual', time: '10:02:57'},
    {airline: 'swa', time: '16:27:41'},
    {airline: 'swa', time: '13:52:30'},
    {airline: 'swa', time: '14:13:20'},
    {airline: 'aal', time: '15:02:31'},
    {airline: 'ual', time: '06:13:08'},
    {airline: 'ual', time: '17:34:19'},
    {airline: 'aal', time: '09:37:47'},
    {airline: 'swa', time: '17:57:27'},
    {airline: 'aal', time: '14:47:29'},
    {airline: 'asa', time: '08:15:20'},
    {airline: 'swa', time: '11:15:28'},
    {airline: 'dal', time: '16:19:07'},
    {airline: 'swa', time: '12:57:32'},
    {airline: 'aal', time: '12:55:12'},
    {airline: 'dal', time: '08:40:45'},
    {airline: 'swa', time: '03:08:23'},
    {airline: 'dal', time: '21:30:50'},
    {airline: 'ual', time: '10:12:03'},
    {airline: 'ual', time: '20:44:03'},
    {airline: 'fft', time: '04:20:38'},
    {airline: 'swa', time: '09:03:10'},
    {airline: 'jbu', time: '05:13:38'},
    {airline: 'swa', time: '04:13:36'},
    {airline: 'dal', time: '17:41:59'},
    {airline: 'ual', time: '10:06:38'},
    {airline: 'swa', time: '17:26:23'},
    {airline: 'ual', time: '11:48:51'},
    {airline: 'ual', time: '12:59:54'},
    {airline: 'swa', time: '03:04:29'},
    {airline: 'ual', time: '20:43:20'},
    {airline: 'dal', time: '12:33:56'},
    {airline: 'ual', time: '16:07:53'},
    {airline: 'fft', time: '11:22:25'},
    {airline: 'jbu', time: '12:50:15'},
    {airline: 'dal', time: '06:09:12'},
    {airline: 'aay', time: '14:08:49'},
    {airline: 'ual', time: '15:53:14'},
    {airline: 'aal', time: '11:07:00'},
    {airline: 'swa', time: '17:50:36'},
    {airline: 'aal', time: '17:18:17'},
    {airline: 'swa', time: '17:58:12'},
    {airline: 'aal', time: '10:42:30'},
    {airline: 'aal', time: '06:10:26'},
    {airline: 'ual', time: '15:30:01'},
    {airline: 'swa', time: '19:41:37'},
    {airline: 'jbu', time: '10:14:10'},
    {airline: 'swa', time: '18:08:45'},
    {airline: 'ual', time: '11:59:29'},
    {airline: 'dal', time: '13:52:44'},
    {airline: 'swa', time: '16:14:52'},
    {airline: 'aal', time: '05:42:17'},
    {airline: 'ual', time: '15:58:39'},
    {airline: 'swa', time: '20:31:31'},
    {airline: 'ual', time: '18:12:51'},
    {airline: 'dal', time: '16:15:09'},
    {airline: 'ual', time: '14:51:21'},
    {airline: 'ual', time: '12:43:10'},
    {airline: 'aal', time: '13:35:22'},
    {airline: 'jbu', time: '14:11:33'},
    {airline: 'swa', time: '07:11:36'},
    {airline: 'dal', time: '12:52:56'},
    {airline: 'aal', time: '13:50:43'},
    {airline: 'aal', time: '16:09:12'},
    {airline: 'aal', time: '11:36:17'},
    {airline: 'ual', time: '23:58:27'},
    {airline: 'aal', time: '09:52:45'},
    {airline: 'swa', time: '13:01:38'},
    {airline: 'aal', time: '15:00:45'},
    {airline: 'dal', time: '17:00:53'},
    {airline: 'swa', time: '15:14:49'},
    {airline: 'swa', time: '12:57:23'},
    {airline: 'dal', time: '17:42:53'},
    {airline: 'swa', time: '08:45:11'},
    {airline: 'dal', time: '17:04:37'},
    {airline: 'swa', time: '13:28:31'},
    {airline: 'vrd', time: '06:16:47'},
    {airline: 'dal', time: '11:41:02'},
    {airline: 'swa', time: '13:29:26'},
    {airline: 'ual', time: '14:21:54'},
    {airline: 'aal', time: '11:37:14'},
    {airline: 'ual', time: '00:21:18'},
    {airline: 'swa', time: '05:15:39'},
    {airline: 'ual', time: '10:39:45'},
    {airline: 'dal', time: '18:35:23'},
    {airline: 'swa', time: '18:01:44'},
    {airline: 'fft', time: '17:20:22'},
    {airline: 'nks', time: '08:49:06'},
    {airline: 'swa', time: '11:29:40'},
    {airline: 'swa', time: '11:43:03'},
    {airline: 'dal', time: '12:44:43'},
    {airline: 'swa', time: '09:18:16'},
    {airline: 'aal', time: '12:10:31'},
    {airline: 'swa', time: '09:32:48'},
    {airline: 'dal', time: '12:22:20'},
    {airline: 'dal', time: '06:56:27'},
    {airline: 'jbu', time: '06:22:37'},
    {airline: 'swa', time: '13:08:11'},
    {airline: 'dal', time: '05:43:43'},
    {airline: 'nks', time: '13:01:19'},
    {airline: 'jbu', time: '11:15:57'},
    {airline: 'fft', time: '06:34:56'},
    {airline: 'ual', time: '14:16:09'},
    {airline: 'swa', time: '07:13:56'},
    {airline: 'jbu', time: '10:16:18'},
    {airline: 'nks', time: '10:47:54'},
    {airline: 'aal', time: '09:09:35'},
    {airline: 'fft', time: '13:00:08'},
    {airline: 'jbu', time: '06:17:07'},
    {airline: 'ual', time: '15:04:45'},
    {airline: 'nks', time: '11:41:51'},
    {airline: 'jbu', time: '11:36:30'},
    {airline: 'ual', time: '22:49:31'},
    {airline: 'aal', time: '15:45:58'},
    {airline: 'jbu', time: '19:30:55'},
    {airline: 'aal', time: '12:14:22'},
    {airline: 'swa', time: '13:27:26'},
    {airline: 'dal', time: '03:19:12'},
    {airline: 'swa', time: '20:48:57'},
    {airline: 'aal', time: '16:33:34'},
    {airline: 'scx', time: '18:14:53'},
    {airline: 'dal', time: '12:55:45'},
    {airline: 'ual', time: '18:44:37'},
    {airline: 'dal', time: '13:29:40'},
    {airline: 'jbu', time: '14:33:12'},
    {airline: 'aal', time: '17:35:53'},
    {airline: 'ual', time: '06:35:17'},
    {airline: 'aay', time: '12:19:23'},
    {airline: 'ual', time: '06:55:17'},
    {airline: 'ual', time: '15:39:47'},
    {airline: 'aal', time: '16:14:14'},
    {airline: 'dal', time: '18:41:46'},
    {airline: 'swa', time: '18:21:24'},
    {airline: 'ual', time: '11:59:09'},
    {airline: 'aay', time: '11:48:05'},
    {airline: 'jbu', time: '09:04:28'},
    {airline: 'nks', time: '14:32:52'},
    {airline: 'ual', time: '13:56:28'},
    {airline: 'swa', time: '00:56:17'},
    {airline: 'dal', time: '10:56:01'},
    {airline: 'fft', time: '13:42:27'},
    {airline: 'vrd', time: '10:19:07'},
    {airline: 'aal', time: '12:27:33'},
    {airline: 'aal', time: '00:53:33'},
    {airline: 'ual', time: '10:11:10'},
    {airline: 'scx', time: '12:00:37'},
    {airline: 'swa', time: '20:06:58'},
    {airline: 'scx', time: '18:48:26'},
    {airline: 'ual', time: '16:28:04'},
    {airline: 'jbu', time: '16:09:00'},
    {airline: 'aal', time: '12:15:57'},
    {airline: 'swa', time: '11:33:59'},
    {airline: 'ual', time: '08:35:46'},
    {airline: 'fft', time: '23:25:54'},
    {airline: 'scx', time: '16:28:02'},
    {airline: 'swa', time: '20:38:58'},
    {airline: 'ual', time: '20:02:47'},
    {airline: 'nks', time: '20:46:06'},
    {airline: 'fft', time: '11:45:53'},
    {airline: 'ual', time: '10:30:04'},
    {airline: 'dal', time: '15:09:40'},
    {airline: 'swa', time: '18:01:54'},
    {airline: 'dal', time: '15:38:09'},
    {airline: 'scx', time: '09:27:43'},
    {airline: 'nks', time: '09:22:58'},
    {airline: 'ual', time: '07:04:55'},
    {airline: 'ual', time: '16:27:08'},
    {airline: 'jbu', time: '07:36:31'},
    {airline: 'dal', time: '05:28:33'},
    {airline: 'ual', time: '12:05:59'},
    {airline: 'dal', time: '07:39:06'},
    {airline: 'nks', time: '14:07:24'},
    {airline: 'aay', time: '05:59:13'},
    {airline: 'aal', time: '11:16:59'},
    {airline: 'aal', time: '17:11:09'},
    {airline: 'swa', time: '15:15:17'},
    {airline: 'aal', time: '15:44:07'},
    {airline: 'swa', time: '13:03:56'},
    {airline: 'aal', time: '11:26:56'},
    {airline: 'nks', time: '12:18:00'},
    {airline: 'aal', time: '13:36:33'},
    {airline: 'ual', time: '12:03:35'},
    {airline: 'aal', time: '20:17:15'},
    {airline: 'dal', time: '14:47:37'},
    {airline: 'ual', time: '14:17:25'},
    {airline: 'swa', time: '16:43:11'},
    {airline: 'swa', time: '17:02:52'},
    {airline: 'ual', time: '10:32:53'},
    {airline: 'nks', time: '12:48:54'},
    {airline: 'jbu', time: '18:47:42'},
    {airline: 'aal', time: '08:20:55'},
    {airline: 'aal', time: '05:28:40'},
    {airline: 'aal', time: '09:10:35'},
    {airline: 'dal', time: '13:54:33'},
    {airline: 'ual', time: '15:17:47'},
    {airline: 'swa', time: '13:55:33'},
    {airline: 'aal', time: '16:00:02'},
    {airline: 'nks', time: '13:32:29'},
    {airline: 'aal', time: '15:06:33'},
    {airline: 'nks', time: '18:02:07'},
    {airline: 'aal', time: '10:30:00'},
    {airline: 'dal', time: '22:09:32'},
    {airline: 'aal', time: '17:21:19'},
    {airline: 'ual', time: '20:17:36'},
    {airline: 'ual', time: '08:38:48'},
    {airline: 'ual', time: '07:02:09'},
    {airline: 'nks', time: '19:57:28'},
    {airline: 'dal', time: '17:24:37'},
    {airline: 'jbu', time: '18:15:46'},
    {airline: 'dal', time: '12:47:08'},
    {airline: 'swa', time: '16:44:59'},
    {airline: 'aal', time: '17:17:30'},
    {airline: 'nks', time: '01:10:58'},
    {airline: 'scx', time: '13:39:14'},
    {airline: 'swa', time: '06:02:16'},
    {airline: 'aay', time: '10:11:36'},
    {airline: 'aal', time: '15:32:57'},
    {airline: 'dal', time: '06:20:29'},
    {airline: 'swa', time: '14:14:58'},
    {airline: 'aal', time: '00:52:11'},
    {airline: 'dal', time: '09:51:05'},
    {airline: 'swa', time: '10:35:48'},
    {airline: 'dal', time: '18:40:10'},
    {airline: 'swa', time: '16:30:10'},
    {airline: 'dal', time: '02:10:09'},
    {airline: 'nks', time: '23:08:44'},
    {airline: 'ual', time: '14:44:09'},
    {airline: 'dal', time: '09:15:43'},
    {airline: 'vrd', tim: '20:56:53'},
    {airline: 'swa', time: '18:52:10'},
    {airline: 'dal', time: '22:50:41'},
    {airline: 'swa', time: '23:37:13'},
    {airline: 'vrd', time: '13:04:41'},
    {airline: 'dal', time: '05:14:22'},
    {airline: 'dal', time: '09:22:18'},
    {airline: 'aal', time: '14:24:39'},
    {airline: 'aal', time: '16:30:31'},
    {airline: 'scx', time: '07:53:30'},
    {airline: 'aal', time: '05:13:08'},
    {airline: 'swa', time: '19:34:17'},
    {airline: 'nks', time: '07:08:36'},
    {airline: 'nks', time: '11:53:01'},
    {airline: 'aal', time: '16:57:08'},
    {airline: 'ual', time: '09:28:30'},
    {airline: 'aal', time: '14:31:51'},
    {airline: 'aal', time: '12:04:39'},
    {airline: 'ual', time: '11:43:21'},
    {airline: 'aal', time: '18:00:09'},
    {airline: 'aal', time: '13:04:38'},
    {airline: 'jbu', time: '11:00:31'},
    {airline: 'aal', time: '06:09:21'},
    {airline: 'swa', time: '09:34:20'},
    {airline: 'jbu', time: '05:37:10'},
    {airline: 'dal', time: '09:53:45'},
    {airline: 'nks', time: '19:56:49'},
    {airline: 'fft', time: '13:04:16'},
    {airline: 'aal', time: '08:57:24'},
    {airline: 'asa', time: '18:56:19'},
    {airline: 'jbu', time: '11:31:32'},
    {airline: 'swa', time: '11:01:07'},
    {airline: 'aal', time: '14:44:32'},
    {airline: 'ual', time: '01:14:09'},
    {airline: 'aal', time: '07:18:22'},
    {airline: 'swa', time: '17:23:16'},
    {airline: 'dal', time: '19:39:12'},
    {airline: 'dal', time: '22:36:59'},
    {airline: 'jbu', time: '13:40:11'},
    {airline: 'nks', time: '10:01:47'},
    {airline: 'swa', time: '19:16:32'},
    {airline: 'aal', time: '12:52:09'},
    {airline: 'fft', time: '13:27:06'},
    {airline: 'aay', time: '08:06:07'},
    {airline: 'fft', time: '16:58:53'},
    {airline: 'jbu', time: '05:07:23'},
    {airline: 'dal', time: '16:44:47'},
    {airline: 'fft', time: '08:14:49'},
    {airline: 'jbu', time: '18:50:33'},
    {airline: 'aal', time: '19:49:58'},
    {airline: 'ual', time: '06:31:48'},
    {airline: 'fft', time: '07:53:13'},
    {airline: 'aal', time: '12:43:26'},
    {airline: 'dal', time: '12:26:02'},
    {airline: 'ual', time: '20:30:17'},
    {airline: 'jbu', time: '07:27:49'},
    {airline: 'nks', time: '12:11:15'},
    {airline: 'ual', time: '14:04:11'},
    {airline: 'ual', time: '12:20:27'},
    {airline: 'ual', time: '19:12:18'},
    {airline: 'ual', time: '13:16:50'},
    {airline: 'swa', time: '12:22:00'},
    {airline: 'dal', time: '11:16:13'},
    {airline: 'dal', time: '11:34:52'},
    {airline: 'dal', time: '14:48:26'},
    {airline: 'ual', time: '16:48:08'},
    {airline: 'swa', time: '14:10:15'},
    {airline: 'fft', time: '01:46:05'},
    {airline: 'fft', time: '15:21:34'},
    {airline: 'dal', time: '13:57:08'},
    {airline: 'vrd', time: '06:43:32'},
    {airline: 'aal', time: '08:02:54'},
    {airline: 'aal', time: '05:51:13'},
    {airline: 'fft', time: '18:00:43'},
    {airline: 'hal', time: '18:54:14'},
    {airline: 'swa', time: '13:50:21'},
    {airline: 'ual', time: '13:53:41'},
    {airline: 'swa', time: '18:58:01'},
    {airline: 'hal', time: '12:43:19'},
    {airline: 'fft', time: '11:48:15'},
    {airline: 'jbu', time: '10:47:17'},
    {airline: 'dal', time: '06:02:22'},
    {airline: 'aal', time: '13:20:08'},
    {airline: 'aal', time: '13:59:08'},
    {airline: 'swa', time: '15:09:46'},
    {airline: 'ual', time: '17:04:32'},
    {airline: 'swa', time: '09:33:22'},
    {airline: 'ual', time: '14:11:04'},
    {airline: 'dal', time: '17:05:47'},
    {airline: 'dal', time: '17:53:05'},
    {airline: 'ual', time: '09:33:10'},
    {airline: 'aal', time: '12:45:08'},
    {airline: 'nks', time: '05:17:09'},
    {airline: 'aal', time: '14:31:40'},
    {airline: 'swa', time: '16:33:48'},
    {airline: 'scx', time: '19:33:36'},
    {airline: 'nks', time: '17:52:14'},
    {airline: 'aay', time: '14:04:57'},
    {airline: 'ual', time: '05:04:49'},
    {airline: 'aal', time: '11:22:11'},
    {airline: 'ual', time: '15:08:54'},
    {airline: 'aal', time: '14:22:31'},
    {airline: 'fft', time: '11:45:11'},
    {airline: 'ual', time: '01:29:45'},
    {airline: 'jbu', time: '11:49:55'},
    {airline: 'ual', time: '23:46:36'},
    {airline: 'fft', time: '06:43:17'},
    {airline: 'ual', time: '15:10:27'},
    {airline: 'swa', time: '10:43:23'},
    {airline: 'swa', time: '10:07:55'},
    {airline: 'swa', time: '03:21:50'},
    {airline: 'aay', time: '08:41:19'},
    {airline: 'aal', time: '09:49:38'},
    {airline: 'dal', time: '12:36:40'},
    {airline: 'asa', time: '15:21:29'},
    {airline: 'hal', time: '13:49:20'},
    {airline: 'nks', time: '10:22:20'},
    {airline: 'swa', time: '17:12:26'},
    {airline: 'jbu', time: '17:30:50'},
    {airline: 'swa', time: '15:35:35'},
    {airline: 'dal', time: '13:22:29'},
    {airline: 'aal', time: '07:27:19'},
    {airline: 'ual', time: '06:05:33'},
    {airline: 'fft', time: '14:27:44'},
    {airline: 'nks', time: '14:38:52'},
    {airline: 'dal', time: '18:35:22'},
    {airline: 'swa', time: '13:54:11'},
    {airline: 'nks', time: '06:21:24'},
    {airline: 'swa', time: '14:30:07'},
    {airline: 'swa', time: '17:40:50'},
    {airline: 'swa', time: '14:39:57'},
    {airline: 'ual', time: '17:11:08'},
    {airline: 'ual', time: '18:51:08'},
    {airline: 'ual', time: '16:49:20'},
    {airline: 'ual', time: '18:08:31'},
    {airline: 'jbu', time: '12:30:00'},
    {airline: 'fft', time: '15:04:03'},
    {airline: 'aal', time: '06:18:26'},
    {airline: 'ual', time: '12:53:11'},
    {airline: 'dal', time: '15:29:18'},
    {airline: 'ual', time: '13:06:36'},
    {airline: 'aal', time: '16:53:40'},
    {airline: 'fft', time: '17:16:33'},
    {airline: 'aal', time: '13:25:08'},
    {airline: 'swa', time: '11:22:40'},
    {airline: 'aal', time: '18:14:30'},
    {airline: 'ual', time: '15:05:15'},
    {airline: 'vrd', time: '55:56:53'},
    {airline: 'swa', time: '17:35:16'},
    {airline: 'ual', time: '15:48:06'},
    {airline: 'dal', time: '11:11:17'},
    {airline: 'ual', time: '05:32:38'},
    {airline: '', time: '20:56:53'},
    {airline: 'asa', time: '14:47:59'},
    {airline: 'asa', time: '11:51:20'},
    {airline: 'hal', time: '19:20:49'},
    {airline: 'ual', time: '13:00:34'},
    {airline: 'fft', time: '18:50:11'},
    {airline: 'dal', time: '16:37:08'},
    {airline: 'swa', time: '13:16:40'},
    {airline: 'ual', time: '15:41:02'},
    {airline: 'swa', time: '14:56:33'},
    {airline: 'ual', time: '08:33:12'},
    {airline: 'dal', time: '11:29:56'},
    {airline: 'dal', time: '14:03:02'},
    {airline: 'scx', time: '16:43:52'},
    {airline: 'swa', time: '18:10:56'},
    {airline: 'aal', time: '10:19:43'},
    {airline: 'nks', time: '20:48:06'},
    {airline: 'ual', time: '17:54:58'},
    {airline: 'jbu', time: '11:39:29'},
    {airline: 'aal', time: '18:11:12'},
    {airline: 'swa', time: '05:32:57'},
    {airline: 'swa', time: '05:53:01'},
    {airline: 'ual', time: '10:15:13'},
    {airline: 'fft', time: '11:20:08'},
    {airline: 'jbu', time: '01:04:09'},
    {airline: 'swa', time: '16:52:00'},
    {airline: 'fft', time: '08:48:22'},
    {airline: 'dal', time: '13:36:52'},
    {airline: 'aal', time: '12:07:06'},
    {airline: 'swa', time: '14:46:05'},
    {airline: 'swa', time: '11:38:19'},
    {airline: 'swa', time: '12:08:37'},
    {airline: 'ual', time: '13:31:56'},
    {airline: 'dal', time: '06:42:40'},
    {airline: 'fft', time: '17:51:18'},
    {airline: 'aal', time: '20:53:57'},
    {airline: 'nks', time: '00:37:08'},
    {airline: 'ual', time: '14:17:15'},
    {airline: 'swa', time: '12:38:26'},
    {airline: 'swa', time: '21:10:51'},
    {airline: 'aal', time: '18:07:28'},
    {airline: 'dal', time: '16:59:17'},
    {airline: 'hal', time: '20:00:37'},
    {airline: 'ual', time: '03:35:16'},
    {airline: 'scx', time: '13:04:17'},
    {airline: 'swa', time: '13:17:37'},
    {airline: 'ual', time: '00:26:24'},
    {airline: 'swa', time: '18:04:45'},
    {airline: 'aal', time: '11:49:27'},
    {airline: 'dal', time: '01:46:15'},
    {airline: 'aal', time: '17:47:07'},
    {airline: 'vrd', time: '05:07:14'},
    {airline: 'ual', time: '12:46:43'},
    {airline: 'ual', time: '16:35:19'},
    {airline: 'nks', time: '07:20:23'},
    {airline: 'swa', time: '13:55:26'},
    {airline: 'ual', time: '15:26:33'},
    {airline: 'ual', time: '15:04:52'},
    {airline: 'ual', time: '04:40:07'},
    {airline: 'swa', time: '09:30:36'},
    {airline: 'swa', time: '05:51:07'},
    {airline: 'jbu', time: '18:09:29'},
    {airline: 'dal', time: '16:23:19'},
    {airline: 'ual', time: '12:01:01'},
    {airline: 'swa', time: '16:19:52'},
    {airline: 'swa', time: '08:04:46'},
    {airline: 'jbu', time: '12:19:16'},
    {airline: 'aal', time: '23:14:08'},
    {airline: 'swa', time: '06:34:30'},
    {airline: 'ual', time: '03:01:39'},
    {airline: 'dal', time: '18:38:38'},
    {airline: 'ual', time: '13:47:39'},
    {airline: 'ual', time: '18:49:59'},
    {airline: 'aal', time: '10:49:05'},
    {airline: 'swa', time: '14:19:15'},
    {airline: 'ual', time: '16:56:24'},
    {airline: 'swa', time: '13:15:30'},
    {airline: 'scx', time: '13:32:09'},
    {airline: 'swa', time: '06:41:26'},
    {airline: 'ual', time: '11:27:27'},
    {airline: 'ual', time: '16:10:00'},
    {airline: 'nks', time: '10:49:55'},
    {airline: 'swa', time: '20:54:46'},
    {airline: 'jbu', time: '11:20:51'},
    {airline: 'aal', time: '20:04:39'},
    {airline: 'swa', time: '14:03:47'},
    {airline: 'swa', time: '11:39:27'},
    {airline: 'swa', time: '07:34:59'},
    {airline: 'dal', time: '06:26:28'},
    {airline: 'aay', time: '12:43:17'},
    {airline: 'jbu', time: '09:28:41'},
    {airline: 'dal', time: '05:31:09'},
    {airline: 'fft', time: '09:20:27'},
    {airline: 'ual', time: '12:56:21'},
    {airline: 'swa', time: '16:42:01'},
    {airline: 'dal', time: '20:24:40'},
    {airline: 'dal', time: '09:23:22'},
    {airline: 'ual', time: '16:27:31'},
    {airline: 'aal', time: '10:10:03'},
    {airline: 'ual', time: '10:59:44'},
    {airline: 'dal', time: '15:18:48'},
    {airline: 'aal', time: '10:34:50'},
    {airline: 'swa', time: '18:24:20'},
    {airline: 'scx', time: '16:20:36'},
    {airline: 'ual', time: '07:03:49'},
    {airline: 'dal', time: '10:02:02'},
    {airline: 'dal', time: '15:47:35'},
    {airline: 'swa', time: '12:57:09'},
    {airline: 'dal', time: '06:47:04'},
    {airline: 'swa', time: '16:52:48'},
    {airline: 'swa', time: '14:35:19'},
    {airline: 'dal', time: '16:32:36'},
    {airline: 'asa', time: '15:17:33'},
    {airline: 'aal', time: '00:39:30'},
    {airline: 'ual', time: '07:24:12'},
    {airline: 'swa', time: '18:45:22'},
    {airline: 'swa', time: '11:54:12'},
    {airline: 'swa', time: '13:10:18'},
    {airline: 'dal', time: '14:14:34'},
    {airline: 'ual', time: '19:54:38'},
    {airline: 'jbu', time: '20:01:28'},
    {airline: 'ual', time: '11:09:33'},
    {airline: 'ual', time: '13:47:54'},
    {airline: 'dal', time: '11:22:23'},
    {airline: 'ual', time: '05:16:38'},
    {airline: 'dal', time: '18:37:38'},
    {airline: 'aal', time: '10:51:03'},
    {airline: 'hal', time: '11:12:32'},
    {airline: 'swa', time: '11:36:54'},
    {airline: 'aal', time: '12:29:43'},
    {airline: 'dal', time: '09:19:02'},
    {airline: 'aal', time: '16:33:14'},
    {airline: 'ual', time: '17:46:43'},
    {airline: 'swa', time: '10:53:16'},
    {airline: 'jbu', time: '16:30:25'},
    {airline: 'swa', time: '14:19:11'},
    {airline: 'ual', time: '15:26:34'},
    {airline: 'aal', time: '06:02:46'},
    {airline: 'swa', time: '14:36:58'},
    {airline: 'swa', time: '09:48:51'},
    {airline: 'aal', time: '11:45:27'},
    {airline: 'dal', time: '02:45:52'},
    {airline: 'fft', time: '11:20:51'},
    {airline: 'dal', time: '18:36:10'},
    {airline: 'ual', time: '06:59:48'},
    {airline: 'aal', time: '12:05:32'},
    {airline: 'ual', time: '17:14:13'},
    {airline: 'ual', time: '09:54:56'},
    {airline: 'swa', time: '18:46:25'},
    {airline: 'dal', time: '11:35:27'},
    {airline: 'aal', time: '17:13:42'},
    {airline: 'swa', time: '20:53:17'},
    {airline: 'dal', time: '13:59:57'},
    {airline: 'aal', time: '12:40:16'},
    {airline: 'ual', time: '08:25:49'},
    {airline: 'aal', time: '13:29:22'},
    {airline: 'dal', time: '17:37:14'},
    {airline: 'nks', time: '11:12:59'},
    {airline: 'aal', time: '02:30:49'},
    {airline: 'ual', time: '12:44:27'},
    {airline: 'ual', time: '11:11:22'},
    {airline: 'swa', time: '20:29:53'},
    {airline: 'swa', time: '18:22:12'},
    {airline: 'nks', time: '10:36:01'},
    {airline: 'aal', time: '20:56:10'},
    {airline: 'ual', time: '12:14:36'},
    {airline: 'dal', time: '06:28:59'},
    {airline: 'ual', time: '14:11:48'},
    {airline: 'dal', time: '21:04:33'},
    {airline: 'vrd', time: '08:00:38'},
    {airline: 'dal', time: '11:10:51'},
    {airline: 'swa', time: '07:58:21'},
    {airline: 'swa', time: '08:14:09'},
    {airline: 'ual', time: '18:03:16'},
    {airline: 'swa', time: '13:18:57'},
    {airline: 'ual', time: '17:27:59'},
    {airline: 'aay', time: '10:03:31'},
    {airline: 'dal', time: '12:44:46'},
    {airline: 'asa', time: '15:47:23'},
    {airline: 'dal', time: '13:30:20'},
    {airline: 'ual', time: '10:06:10'},
    {airline: 'aal', time: '08:14:27'},
    {airline: 'dal', time: '14:02:48'},
    {airline: 'dal', time: '14:20:07'},
    {airline: 'dal', time: '16:50:34'},
    {airline: 'aal', time: '09:10:58'},
    {airline: 'fft', time: '18:17:27'},
    {airline: 'aal', time: '10:36:52'},
    {airline: 'aal', time: '13:21:50'},
    {airline: 'dal', time: '08:11:07'},
    {airline: 'dal', time: '15:04:28'},
    {airline: 'fft', time: '15:42:11'},
    {airline: 'swa', time: '10:49:01'},
    {airline: 'aal', time: '12:04:12'},
    {airline: 'aal', time: '05:52:41'},
    {airline: 'nks', time: '14:25:16'},
    {airline: 'scx', time: '09:44:31'},
    {airline: 'ual', time: '11:46:20'},
    {airline: 'nks', time: '13:38:23'},
    {airline: 'ual', time: '13:11:49'},
    {airline: 'ual', time: '17:30:48'},
    {airline: 'dal', time: '12:57:44'},
    {airline: 'aal', time: '05:17:15'},
    {airline: 'aal', time: '17:04:32'},
    {airline: 'swa', time: '23:02:14'},
    {airline: 'ual', time: '16:45:12'},
    {airline: 'hal', time: '13:41:04'},
    {airline: 'dal', time: '11:21:42'},
    {airline: 'jbu', time: '11:45:07'},
    {airline: 'swa', time: '11:52:33'},
    {airline: 'ual', time: '07:50:20'},
    {airline: 'nks', time: '14:02:23'},
    {airline: 'dal', time: '07:57:18'},
    {airline: 'swa', time: '11:28:42'},
    {airline: 'swa', time: '06:29:19'},
    {airline: 'fft', time: '16:43:03'},
    {airline: 'aal', time: '19:53:33'},
    {airline: 'aal', time: '22:48:51'},
    {airline: 'ual', time: '04:25:36'},
    {airline: 'swa', time: '18:21:39'},
    {airline: 'dal', time: '11:19:03'},
    {airline: 'jbu', time: '09:57:57'},
    {airline: 'dal', time: '10:57:48'},
    {airline: 'vrd', time: '09:28:30'},
    {airline: 'dal', time: '04:32:09'},
    {airline: 'ual', time: '05:57:28'},
    {airline: 'aal', time: '16:50:34'},
    {airline: 'swa', time: '05:14:02'},
    {airline: 'aal', time: '01:32:46'},
    {airline: 'dal', time: '11:43:55'},
    {airline: 'ual', time: '19:44:07'},
    {airline: 'ual', time: '14:46:00'},
    {airline: 'dal', time: '18:25:20'},
    {airline: 'dal', time: '00:28:19'},
    {airline: 'aal', time: '16:18:39'},
    {airline: 'aal', time: '15:23:42'},
    {airline: 'aal', time: '11:52:56'},
    {airline: 'swa', time: '08:29:58'},
    {airline: 'dal', time: '10:17:07'},
    {airline: 'scx', time: '22:04:39'},
    {airline: 'swa', time: '16:08:53'},
    {airline: 'swa', time: '20:49:00'},
    {airline: 'nks', time: '14:26:37'},
    {airline: 'dal', time: '09:24:04'},
    {airline: 'fft', time: '16:30:57'},
    {airline: 'ual', time: '01:30:57'},
    {airline: 'swa', time: '08:16:42'},
    {airline: 'vrd', time: '18:24:24'},
    {airline: 'ual', time: '15:42:47'},
    {airline: 'fft', time: '07:48:22'},
    {airline: 'swa', time: '15:38:28'},
    {airline: 'ual', time: '14:22:38'},
    {airline: 'fft', time: '17:49:11'},
    {airline: 'ual', time: '13:04:43'},
    {airline: 'fft', time: '03:55:56'},
    {airline: 'aal', time: '10:58:41'},
    {airline: 'swa', time: '17:42:15'},
    {airline: 'swa', time: '15:47:19'},
    {airline: 'aal', time: '10:33:07'},
    {airline: 'dal', time: '20:21:53'},
    {airline: 'ual', time: '16:45:02'},
    {airline: 'swa', time: '21:40:21'},
    {airline: 'fft', time: '12:20:12'},
    {airline: 'jbu', time: '18:51:37'},
    {airline: 'aal', time: '16:37:55'},
    {airline: 'aay', time: '21:30:54'},
    {airline: 'dal', time: '12:04:04'},
    {airline: 'aal', time: '11:46:03'},
    {airline: 'aal', time: '15:40:49'},
    {airline: 'aal', time: '13:11:58'},
    {airline: 'dal', time: '12:57:11'},
    {airline: 'ual', time: '14:59:21'},
    {airline: 'dal', time: '11:27:10'},
    {airline: 'nks', time: '06:52:10'},
    {airline: 'scx', time: '18:08:29'},
    {airline: 'aal', time: '13:40:08'},
    {airline: 'aal', time: '18:35:40'},
    {airline: 'fft', time: '14:02:14'},
    {airline: 'scx', time: '16:59:42'},
    {airline: 'swa', time: '02:04:25'},
    {airline: 'aal', time: '13:38:39'},
    {airline: 'aal', time: '13:07:39'},
    {airline: 'nks', time: '01:25:25'},
    {airline: 'aal', time: '17:17:10'},
    {airline: 'aal', time: '07:49:50'},
    {airline: 'asa', time: '06:26:07'},
    {airline: 'asa', time: '10:59:22'},
    {airline: 'swa', time: '13:27:19'},
    {airline: 'dal', time: '13:56:00'},
    {airline: 'nks', time: '21:38:13'},
    {airline: 'swa', time: '13:05:42'},
    {airline: 'ual', time: '12:34:35'},
    {airline: 'aal', time: '18:07:38'},
    {airline: 'dal', time: '10:36:58'},
    {airline: 'ual', time: '13:02:01'},
    {airline: 'aal', time: '07:08:55'},
    {airline: 'swa', time: '16:33:17'},
    {airline: 'nks', time: '18:13:49'},
    {airline: 'ual', time: '17:34:33'},
    {airline: 'jbu', time: '18:33:02'},
    {airline: 'ual', time: '18:29:17'},
    {airline: 'fft', time: '08:29:59'},
    {airline: 'nks', time: '16:31:21'},
    {airline: 'aal', time: '08:51:50'},
    {airline: 'jbu', time: '09:04:11'},
    {airline: 'scx', time: '15:01:26'},
    {airline: 'swa', time: '09:31:00'},
    {airline: 'dal', time: '10:05:57'},
    {airline: 'aal', time: '10:01:14'},
    {airline: 'ual', time: '06:36:27'},
    {airline: 'dal', time: '18:55:43'},
    {airline: 'aal', time: '08:43:06'},
    {airline: 'aal', time: '08:53:35'},
    {airline: 'vrd', time: '20:61:53'},
    {airline: 'swa', time: '13:48:00'},
    {airline: 'aal', time: '09:34:48'},
    {airline: 'ual', time: '20:18:27'},
    {airline: 'ual', time: '03:11:37'},
    {airline: 'dal', time: '09:09:15'},
    {airline: 'vrd', time: '17:34:12'},
    {airline: 'dal', time: '12:17:14'},
    {airline: 'dal', time: '06:09:58'},
    {airline: 'ual', time: '14:35:53'},
    {airline: 'jbu', time: '12:02:34'},
    {airline: 'swa', time: '20:49:02'},
    {airline: 'jbu', time: '17:30:25'},
    {airline: 'jbu', time: '14:27:42'},
    {airline: 'aal', time: '16:58:32'},
    {airline: 'fft', time: '18:22:01'},
    {airline: 'swa', time: '13:15:06'},
    {airline: 'swa', time: '22:09:47'},
    {airline: 'aay', time: '09:24:11'},
    {airline: 'vrd', time: '10:30:18'},
    {airline: 'ual', time: '15:41:41'},
    {airline: 'nks', time: '19:15:58'},
    {airline: 'fft', time: '14:56:10'},
    {airline: 'ual', time: '10:24:32'},
    {airline: 'nks', time: '13:36:04'},
    {airline: 'nks', time: '16:32:22'},
    {airline: 'jbu', time: '14:41:58'},
    {airline: 'dal', time: '17:21:37'},
    {airline: 'aal', time: '17:39:34'},
    {airline: 'swa', time: '19:32:56'},
    {airline: 'aal', time: '09:40:40'},
    {airline: 'jbu', time: '16:34:15'},
    {airline: 'swa', time: '15:14:42'},
    {airline: 'ual', time: '09:22:19'},
    {airline: 'swa', time: '12:14:08'},
    {airline: 'aay', time: '18:56:50'},
    {airline: 'ual', time: '14:57:53'},
    {airline: 'swa', time: '19:25:06'},
    {airline: 'ual', time: '13:02:08'},
    {airline: 'dal', time: '11:04:54'},
    {airline: 'jbu', time: '10:57:29'},
    {airline: 'swa', time: '20:10:29'},
    {airline: 'aal', time: '17:09:35'},
    {airline: 'fft', time: '20:27:17'},
    {airline: 'aal', time: '17:58:45'},
    {airline: 'aal', time: '17:16:31'},
    {airline: 'ual', time: '14:27:36'},
    {airline: 'ual', time: '17:43:54'},
    {airline: 'aal', time: '11:19:03'},
    {airline: 'ual', time: '09:09:20'},
    {airline: 'ual', time: '15:26:14'},
    {airline: 'dal', time: '16:45:29'},
    {airline: 'ual', time: '09:26:18'},
    {airline: 'swa', time: '12:20:52'},
    {airline: 'swa', time: '08:11:20'},
    {airline: 'hal', time: '06:34:40'},
    {airline: 'swa', time: '14:41:55'},
    {airline: 'aal', time: '14:08:18'},
    {airline: 'dal', time: '14:05:12'},
    {airline: 'aal', time: '12:25:53'},
    {airline: 'aal', time: '12:42:09'},
    {airline: 'aal', time: '02:51:51'},
    {airline: 'ual', time: '19:18:44'},
    {airline: 'aay', time: '14:11:52'},
    {airline: 'swa', time: '15:28:08'},
    {airline: 'aal', time: '09:28:59'},
    {airline: 'ual', time: '15:40:13'},
    {airline: 'dal', time: '14:01:00'},
    {airline: 'swa', time: '10:08:42'},
    {airline: 'dal', time: '13:33:39'},
    {airline: 'swa', time: '11:54:12'},
    {airline: 'dal', time: '19:05:36'},
    {airline: 'jbu', time: '05:19:26'},
    {airline: 'aal', time: '06:01:35'},
    {airline: 'dal', time: '06:26:26'},
    {airline: 'vrd', time: '15:05:58'},
    {airline: 'dal', time: '07:40:34'},
    {airline: 'dal', time: '15:21:00'},
    {airline: 'aal', time: '11:25:35'},
    {airline: 'aal', time: '11:09:31'},
    {airline: 'hal', time: '18:42:26'},
    {airline: 'fft', time: '10:02:08'},
    {airline: 'fft', time: '19:17:26'},
    {airline: 'vrd', time: '11:08:40'},
    {airline: 'ual', time: '19:20:57'},
    {airline: 'ual', time: '15:26:36'},
    {airline: 'aal', time: '17:40:54'},
    {airline: 'aal', time: '12:55:36'},
    {airline: 'fft', time: '15:44:03'},
    {airline: 'dal', time: '10:01:37'},
    {airline: 'dal', time: '15:18:34'},
    {airline: 'swa', time: '12:38:49'},
    {airline: 'aal', time: '07:53:04'},
    {airline: 'dal', time: '13:41:26'},
    {airline: 'swa', time: '13:05:01'},
    {airline: 'swa', time: '13:40:52'},
    {airline: 'dal', time: '03:32:02'},
    {airline: 'ual', time: '15:03:23'},
    {airline: 'dal', time: '20:39:47'},
    {airline: 'aal', time: '14:41:43'},
    {airline: 'dal', time: '15:43:12'},
    {airline: 'dal', time: '20:50:52'},
    {airline: 'jbu', time: '13:22:56'},
    {airline: 'dal', time: '05:24:37'},
    {airline: 'dal', time: '15:35:03'},
    {airline: 'nks', time: '07:12:36'},
    {airline: 'swa', time: '19:19:58'},
    {airline: 'swa', time: '06:22:04'},
    {airline: 'asa', time: '07:14:09'},
    {airline: 'dal', time: '15:05:53'},
    {airline: 'swa', time: '10:17:43'},
    {airline: 'dal', time: '10:23:14'},
    {airline: 'ual', time: '17:17:57'},
    {airline: 'scx', time: '16:51:09'},
    {airline: 'hal', time: '17:33:22'},
    {airline: 'fft', time: '10:06:53'},
    {airline: 'aal', time: '16:07:05'},
    {airline: 'swa', time: '15:35:48'},
    {airline: 'dal', time: '13:53:57'},
    {airline: 'aal', time: '10:53:15'},
    {airline: 'ual', time: '18:46:42'},
    {airline: 'swa', time: '14:43:14'},
    {airline: 'aal', time: '11:39:25'},
    {airline: 'nks', time: '14:29:23'},
    {airline: 'aal', time: '12:23:23'},
    {airline: 'swa', time: '10:09:58'},
    {airline: 'fft', time: '14:36:20'},
    {airline: 'fft', time: '12:27:38'},
    {airline: 'dal', time: '12:36:34'},
    {airline: 'vrd', time: '16:56:27'},
    {airline: 'ual', time: '17:19:09'},
    {airline: 'dal', time: '16:58:28'},
    {airline: 'fft', time: '03:59:57'},
    {airline: 'swa', time: '17:24:09'},
    {airline: 'aal', time: '12:31:21'},
    {airline: 'ual', time: '14:06:25'},
    {airline: 'dal', time: '16:02:36'},
    {airline: 'aal', time: '10:50:47'},
    {airline: 'swa', time: '11:10:16'},
    {airline: 'dal', time: '15:28:31'},
    {airline: 'ual', time: '16:13:58'},
    {airline: 'aal', time: '19:14:18'},
    {airline: 'swa', time: '06:25:00'},
    {airline: 'fft', time: '10:01:35'},
    {airline: 'aal', time: '09:26:14'},
    {airline: 'jbu', time: '17:21:06'},
    {airline: 'dal', time: '20:22:42'},
    {airline: 'ual', time: '15:27:26'},
    {airline: 'aal', time: '05:40:49'},
    {airline: 'swa', time: '06:53:16'},
    {airline: 'ual', time: '19:09:47'},
    {airline: 'nks', time: '19:09:45'},
    {airline: 'dal', time: '09:03:08'},
    {airline: 'dal', time: '12:20:46'},
    {airline: 'ual', time: '20:16:46'},
    {airline: 'ual', time: '23:22:02'},
    {airline: 'scx', time: '13:29:58'},
    {airline: 'ual', time: '09:36:33'},
    {airline: 'aay', time: '08:29:12'},
    {airline: 'aal', time: '17:32:59'},
    {airline: 'ual', time: '12:35:42'},
    {airline: 'aay', time: '20:12:40'},
    {airline: 'aal', time: '16:37:04'},
    {airline: 'jbu', time: '10:44:02'},
    {airline: 'dal', time: '07:12:07'},
    {airline: 'nks', time: '13:10:40'},
    {airline: 'vrd', time: '14:12:25'},
    {airline: 'jbu', time: '16:32:59'},
    {airline: 'ual', time: '06:27:29'},
    {airline: 'swa', time: '13:58:32'},
    {airline: 'aal', time: '16:32:01'},
    {airline: 'aal', time: '17:51:48'},
    {airline: 'nks', time: '12:28:43'},
    {airline: 'swa', time: '06:40:23'},
    {airline: 'dal', time: '00:46:04'},
    {airline: 'dal', time: '07:33:51'},
    {airline: 'hal', time: '17:40:52'},
    {airline: 'nks', time: '09:19:59'},
    {airline: 'aal', time: '18:59:47'},
    {airline: 'ual', time: '16:54:31'},
    {airline: 'swa', time: '07:23:40'},
    {airline: 'nks', time: '07:35:11'},
    {airline: 'aal', time: '14:59:57'},
    {airline: 'ual', time: '17:47:58'},
    {airline: 'scx', time: '17:02:29'},
    {airline: 'ual', time: '07:26:44'},
    {airline: 'dal', time: '11:58:04'},
    {airline: 'ual', time: '14:00:30'},
    {airline: 'nks', time: '10:14:38'},
    {airline: 'aal', time: '10:06:53'},
    {airline: 'dal', time: '14:47:06'},
    {airline: 'aal', time: '16:56:23'},
    {airline: 'nks', time: '16:35:56'},
    {airline: 'ual', time: '17:27:33'},
    {airline: 'fft', time: '11:05:38'},
    {airline: 'swa', time: '14:43:10'},
    {airline: 'aal', time: '11:44:01'},
    {airline: 'ual', time: '17:18:29'},
    {airline: 'ual', time: '18:15:54'},
    {airline: 'dal', time: '09:23:40'},
    {airline: 'dal', time: '12:24:27'},
    {airline: 'ual', time: '16:18:26'},
    {airline: 'aal', time: '16:40:35'},
    {airline: 'dal', time: '17:26:07'},
    {airline: 'jbu', time: '15:50:41'},
    {airline: 'dal', time: '10:54:14'},
    {airline: 'fft', time: '18:51:06'},
    {airline: 'ual', time: '00:54:02'},
    {airline: 'jbu', time: '12:14:01'},
    {airline: 'ual', time: '17:15:32'},
    {airline: 'dal', time: '09:24:53'},
    {airline: 'aay', time: '11:53:19'},
    {airline: 'aal', time: '15:50:11'},
    {airline: 'ual', time: '15:44:06'},
    {airline: 'ual', time: '10:22:15'},
    {airline: 'swa', time: '13:54:04'},
    {airline: 'jbu', time: '10:43:59'},
    {airline: 'aal', time: '20:00:09'},
    {airline: 'swa', time: '17:13:26'},
    {airline: 'aal', time: '14:48:52'},
    {airline: 'ual', time: '18:05:43'},
    {airline: 'asa', time: '03:56:21'},
    {airline: 'jbu', time: '18:03:31'},
    {airline: 'swa', time: '10:24:32'},
    {airline: 'dal', time: '13:23:15'},
    {airline: 'aal', time: '09:59:44'},
    {airline: 'aal', time: '17:40:40'},
    {airline: 'swa', time: '15:10:01'},
    {airline: 'nks', time: '09:48:46'},
    {airline: 'ual', time: '08:41:35'},
    {airline: 'dal', time: '18:02:15'},
    {airline: 'aal', time: '10:04:31'},
    {airline: 'jbu', time: '08:42:45'},
    {airline: 'aal', time: '13:11:38'},
    {airline: 'ual', time: '21:25:03'},
    {airline: 'fft', time: '18:20:37'},
    {airline: 'jbu', time: '09:50:40'},
    {airline: 'hal', time: '10:04:50'},
    {airline: 'ual', time: '15:42:05'},
    {airline: 'swa', time: '06:43:27'},
    {airline: 'aal', time: '10:02:52'},
    {airline: 'nks', time: '17:47:14'},
    {airline: 'swa', time: '10:10:34'},
    {airline: 'swa', time: '11:02:52'},
    {airline: 'dal', time: '07:23:40'},
    {airline: 'aal', time: '18:07:12'},
    {airline: 'ual', time: '10:13:02'},
    {airline: 'aal', time: '18:55:40'},
    {airline: 'aal', time: '13:15:21'},
    {airline: 'swa', time: '10:03:39'},
    {airline: 'aal', time: '02:15:22'},
    {airline: 'dal', time: '05:18:05'},
    {airline: 'jbu', time: '17:34:19'},
    {airline: 'aal', time: '14:59:37'},
    {airline: 'ual', time: '09:18:53'},
    {airline: 'aal', time: '18:00:48'},
    {airline: 'asa', time: '00:33:44'},
    {airline: 'aal', time: '05:48:29'},
    {airline: 'fft', time: '15:08:32'},
    {airline: 'aal', time: '10:28:23'},
    {airline: 'aal', time: '15:07:56'},
    {airline: 'ual', time: '18:23:14'},
    {airline: 'dal', time: '13:30:32'},
    {airline: 'dal', time: '16:48:28'},
    {airline: 'jbu', time: '11:50:50'},
    {airline: 'asa', time: '12:39:32'},
    {airline: 'fft', time: '08:53:27'},
    {airline: 'ual', time: '07:33:32'},
    {airline: 'nks', time: '11:11:14'},
    {airline: 'vrd', time: '15:58:30'},
    {airline: 'nks', time: '09:47:31'},
    {airline: 'dal', time: '11:48:26'},
    {airline: 'fft', time: '06:50:53'},
    {airline: 'nks', time: '20:22:15'},
    {airline: 'ual', time: '12:53:56'},
    {airline: 'ual', time: '17:33:35'},
    {airline: 'ual', time: '03:29:44'},
    {airline: 'swa', time: '14:59:44'},
    {airline: 'swa', time: '11:32:23'},
    {airline: 'ual', time: '08:42:35'},
    {airline: 'dal', time: '05:11:42'},
    {airline: 'aal', time: '13:58:58'},
    {airline: 'ual', time: '12:24:18'},
    {airline: 'ual', time: '14:25:07'},
    {airline: 'ual', time: '12:36:48'},
    {airline: 'swa', time: '18:44:13'},
    {airline: 'aal', time: '13:09:13'},
    {airline: 'ual', time: '10:47:23'},
    {airline: 'aal', time: '05:32:36'},
    {airline: 'ual', time: '16:36:52'},
    {airline: 'dal', time: '18:59:57'},
    {airline: 'swa', time: '14:21:59'},
    {airline: 'swa', time: '08:23:59'},
    {airline: 'swa', time: '09:30:20'},
    {airline: 'aal', time: '20:35:49'},
    {airline: 'swa', time: '11:22:52'},
    {airline: 'nks', time: '14:52:38'},
    {airline: 'dal', time: '18:44:10'},
    {airline: 'swa', time: '13:32:56'},
    {airline: 'swa', time: '08:19:52'},
    {airline: 'dal', time: '16:18:09'},
    {airline: 'fft', time: '01:58:06'},
    {airline: 'swa', time: '08:38:26'},
    {airline: 'ual', time: '09:29:09'},
    {airline: 'dal', time: '15:59:43'},
    {airline: 'swa', time: '06:21:30'},
    {airline: 'scx', time: '12:38:45'},
    {airline: 'swa', time: '03:50:05'},
    {airline: 'aal', time: '10:13:40'},
    {airline: 'aal', time: '04:40:45'},
    {airline: 'swa', time: '17:56:01'},
    {airline: 'swa', time: '15:24:16'},
    {airline: 'ual', time: '18:47:17'},
    {airline: 'aal', time: '14:03:26'},
    {airline: 'dal', time: '20:20:46'},
    {airline: 'swa', time: '17:31:49'},
    {airline: 'dal', time: '00:33:14'},
    {airline: 'jbu', time: '19:11:10'},
    {airline: 'dal', time: '13:03:21'},
    {airline: 'swa', time: '18:27:05'},
    {airline: 'swa', time: '17:44:50'},
    {airline: 'swa', time: '13:44:05'},
    {airline: 'fft', time: '16:38:38'},
    {airline: 'dal', time: '13:45:43'},
    {airline: 'swa', time: '16:18:59'},
    {airline: 'ual', time: '08:02:18'},
    {airline: 'dal', time: '09:48:03'},
    {airline: 'aal', time: '13:08:18'},
    {airline: 'vrd', time: '10:01:15'},
    {airline: 'fft', time: '06:16:13'},
    {airline: 'swa', time: '09:22:30'},
    {airline: 'fft', time: '05:22:53'},
    {airline: 'ual', time: '10:24:23'},
    {airline: 'aal', time: '20:22:17'},
    {airline: 'fft', time: '18:55:31'},
    {airline: 'aal', time: '05:59:17'},
    {airline: 'aal', time: '18:03:37'},
    {airline: 'swa', time: '14:42:30'},
    {airline: 'aal', time: '17:30:14'},
    {airline: 'aal', time: '10:36:28'},
    {airline: 'dal', time: '07:34:56'},
    {airline: 'hal', time: '04:32:35'},
    {airline: 'nks', time: '14:09:29'},
    {airline: 'aal', time: '18:22:55'},
    {airline: 'ual', time: '11:40:08'},
    {airline: 'ual', time: '12:19:49'},
    {airline: 'jbu', time: '12:13:51'},
    {airline: 'asa', time: '09:27:45'},
    {airline: 'asa', time: '10:18:44'},
    {airline: 'jbu', time: '09:21:18'},
    {airline: 'dal', time: '11:04:30'},
    {airline: 'fft', time: '13:43:18'},
    {airline: 'fft', time: '19:09:16'},
    {airline: 'ual', time: '15:05:59'},
    {airline: 'jbu', time: '14:59:52'},
    {airline: 'swa', time: '14:07:29'},
    {airline: 'fft', time: '14:27:36'},
    {airline: 'aal', time: '17:03:45'},
    {airline: 'aal', time: '14:04:58'},
    {airline: 'aal', time: '23:57:12'},
    {airline: 'dal', time: '06:40:53'},
    {airline: 'dal', time: '12:15:28'},
    {airline: 'dal', time: '01:42:42'},
    {airline: 'aal', time: '17:25:31'},
    {airline: 'swa', time: '05:05:47'},
    {airline: 'ual', time: '11:34:11'},
    {airline: 'ual', time: '15:38:10'},
    {airline: 'fft', time: '14:22:37'},
    {airline: 'jbu', time: '17:43:33'},
    {airline: 'dal', time: '08:04:12'},
    {airline: 'aay', time: '13:49:05'},
    {airline: 'swa', time: '17:30:16'},
    {airline: 'ual', time: '18:49:29'},
    {airline: 'aal', time: '06:40:07'},
    {airline: 'jbu', time: '15:10:27'},
    {airline: 'ual', time: '00:11:46'},
    {airline: 'aal', time: '21:31:50'},
    {airline: 'aal', time: '07:48:29'},
    {airline: 'ual', time: '16:52:22'},
    {airline: 'aal', time: '04:07:17'},
    {airline: 'swa', time: '10:53:17'},
    {airline: 'dal', time: '03:04:39'},
    {airline: 'dal', time: '18:16:17'},
    {airline: 'scx', time: '14:35:38'},
    {airline: 'swa', time: '11:20:01'},
    {airline: 'vrd', time: '11:18:02'},
    {airline: 'aal', time: '05:46:13'},
    {airline: 'dal', time: '10:04:10'},
    {airline: 'aal', time: '20:12:03'},
    {airline: 'nks', time: '12:07:46'},
    {airline: 'swa', time: '13:25:10'},
    {airline: 'dal', time: '01:18:46'},
    {airline: 'ual', time: '23:34:15'},
    {airline: 'vrd', time: '20:31:05'},
    {airline: 'swa', time: '08:13:00'},
    {airline: 'swa', time: '20:47:08'},
    {airline: 'aal', time: '06:52:45'},
    {airline: 'ual', time: '09:48:03'},
    {airline: 'aal', time: '09:22:12'},
    {airline: 'swa', time: '14:43:08'},
    {airline: 'swa', time: '21:21:49'},
    {airline: 'ual', time: '18:31:02'},
    {airline: 'ual', time: '15:43:28'},
    {airline: 'fft', time: '18:30:34'},
    {airline: 'dal', time: '14:37:04'},
    {airline: 'ual', time: '18:14:57'},
    {airline: 'dal', time: '23:36:48'},
    {airline: 'nks', time: '14:10:57'},
    {airline: 'ual', time: '10:57:52'},
    {airline: 'fft', time: '14:17:48'},
    {airline: 'jbu', time: '09:50:52'},
    {airline: 'swa', time: '09:01:16'},
    {airline: 'fft', time: '10:06:57'},
    {airline: 'swa', time: '12:03:39'},
    {airline: 'scx', time: '13:42:35'},
    {airline: 'aal', time: '06:21:25'},
    {airline: 'dal', time: '10:39:07'},
    {airline: 'aay', time: '16:43:48'},
    {airline: 'asa', time: '11:14:23'},
    {airline: 'nks', time: '11:17:46'},
    {airline: 'swa', time: '07:26:36'},
    {airline: 'ual', time: '15:05:13'},
    {airline: 'ual', time: '17:27:49'},
    {airline: 'ual', time: '11:00:43'},
    {airline: 'dal', time: '11:14:26'},
    {airline: 'swa', time: '18:31:38'},
    {airline: 'vrd', time: '17:56:18'},
    {airline: 'ual', time: '10:56:47'},
    {airline: 'ual', time: '20:54:48'},
    {airline: 'aal', time: '09:19:19'},
    {airline: 'jbu', time: '12:34:35'},
    {airline: 'aal', time: '14:53:49'},
    {airline: 'ual', time: '09:46:01'},
    {airline: 'swa', time: '09:46:01'},
    {airline: 'hal', time: '13:08:38'},
    {airline: 'aal', time: '18:07:02'},
    {airline: 'aal', time: '13:47:36'},
    {airline: 'swa', time: '13:13:40'},
    {airline: 'dal', time: '20:32:24'},
    {airline: 'asa', time: '16:02:11'},
    {airline: 'hal', time: '15:02:46'},
    {airline: 'ual', time: '13:16:19'},
    {airline: 'ual', time: '17:57:51'},
    {airline: 'dal', time: '12:59:48'},
    {airline: 'dal', time: '17:20:41'},
    {airline: 'jbu', time: '17:28:45'},
    {airline: 'fft', time: '07:36:58'},
    {airline: 'dal', time: '10:45:55'},
    {airline: 'fft', time: '16:36:03'},
    {airline: 'swa', time: '13:33:12'},
    {airline: 'jbu', time: '07:48:34'},
    {airline: 'ual', time: '16:21:18'},
    {airline: 'hal', time: '12:37:04'},
    {airline: 'swa', time: '06:31:47'},
    {airline: 'ual', time: '13:53:27'},
    {airline: 'dal', time: '09:47:00'},
    {airline: 'dal', time: '12:43:57'},
    {airline: 'jbu', time: '13:22:39'},
    {airline: 'aay', time: '09:36:02'},
    {airline: 'ual', time: '19:34:44'},
    {airline: 'ual', time: '11:50:35'},
    {airline: 'aal', time: '01:12:23'},
    {airline: 'dal', time: '18:25:56'},
    {airline: 'dal', time: '08:17:05'},
    {airline: 'dal', time: '01:38:36'},
    {airline: 'swa', time: '16:15:31'},
    {airline: 'swa', time: '07:39:20'},
    {airline: 'swa', time: '15:22:05'},
    {airline: 'ual', time: '19:33:37'},
    {airline: 'fft', time: '11:12:22'},
    {airline: 'aal', time: '22:55:52'},
    {airline: 'dal', time: '17:59:48'},
    {airline: 'dal', time: '14:31:35'},
    {airline: 'aal', time: '11:47:16'},
    {airline: 'aal', time: '13:24:14'},
    {airline: 'ual', time: '09:05:29'},
    {airline: 'ual', time: '10:47:19'},
    {airline: 'fft', time: '09:17:30'},
    {airline: 'jbu', time: '01:20:07'},
    {airline: 'aal', time: '18:43:46'},
    {airline: 'aal', time: '12:31:27'},
    {airline: 'nks', time: '18:57:40'},
    {airline: 'aal', time: '16:34:00'},
    {airline: 'vrd', time: '13:11:48'},
    {airline: 'swa', time: '18:10:28'},
    {airline: 'nks', time: '07:52:23'},
    {airline: 'swa', time: '06:21:53'},
    {airline: 'fft', time: '16:19:33'},
    {airline: 'aal', time: '14:29:54'},
    {airline: 'swa', time: '05:13:05'},
    {airline: 'swa', time: '18:58:55'},
    {airline: 'swa', time: '11:43:35'},
    {airline: 'swa', time: '17:11:53'},
    {airline: 'vrd', time: '18:01:34'},
    {airline: 'swa', time: '16:17:18'},
    {airline: 'hal', time: '13:36:18'},
    {airline: 'aal', time: '16:16:28'},
    {airline: 'dal', time: '14:17:04'},
    {airline: 'aal', time: '12:23:32'},
    {airline: 'swa', time: '15:11:44'},
    {airline: 'ual', time: '12:53:08'},
    {airline: 'dal', time: '10:09:15'},
    {airline: 'nks', time: '15:47:38'},
    {airline: 'dal', time: '07:12:39'},
    {airline: 'aay', time: '15:35:12'},
    {airline: 'vrd', time: '17:40:22'},
    {airline: 'ual', time: '06:11:45'},
    {airline: 'aal', time: '03:40:44'},
    {airline: 'dal', time: '05:54:59'},
    {airline: 'aal', time: '20:25:52'},
    {airline: 'swa', time: '18:08:55'},
    {airline: 'aal', time: '09:30:09'},
    {airline: 'nks', time: '03:53:03'},
    {airline: 'dal', time: '16:04:54'},
    {airline: 'asa', time: '11:40:42'},
    {airline: 'aay', time: '19:28:58'},
    {airline: 'swa', time: '13:42:56'},
    {airline: 'dal', time: '11:36:26'},
    {airline: 'nks', time: '16:41:02'},
    {airline: 'nks', time: '06:28:38'},
    {airline: 'swa', time: '12:12:58'},
    {airline: 'nks', time: '14:13:50'},
    {airline: 'dal', time: '13:08:40'},
    {airline: 'jbu', time: '18:23:32'},
    {airline: 'nks', time: '12:09:42'},
    {airline: 'swa', time: '14:31:02'},
    {airline: 'nks', time: '08:47:53'},
    {airline: 'jbu', time: '16:43:45'},
    {airline: 'dal', time: '07:48:34'},
    {airline: 'swa', time: '16:29:47'},
    {airline: 'dal', time: '23:17:29'},
    {airline: 'swa', time: '09:33:37'},
    {airline: 'ual', time: '11:22:39'},
    {airline: 'scx', time: '17:23:06'},
    {airline: 'dal', time: '17:50:15'},
    {airline: 'dal', time: '16:27:18'},
    {airline: 'dal', time: '12:41:11'},
    {airline: 'ual', time: '09:10:30'},
    {airline: 'dal', time: '10:47:31'},
    {airline: 'ual', time: '18:24:42'},
    {airline: 'swa', time: '14:33:48'},
    {airline: 'dal', time: '16:27:52'},
    {airline: 'aal', time: '14:32:31'},
    {airline: 'swa', time: '14:12:16'},
    {airline: 'swa', time: '17:55:19'},
    {airline: 'swa', time: '11:26:33'},
    {airline: 'ual', time: '18:04:13'},
    {airline: 'swa', time: '11:42:10'},
    {airline: 'ual', time: '14:48:19'},
    {airline: 'dal', time: '13:22:55'},
    {airline: 'aal', time: '11:43:11'},
    {airline: 'dal', time: '13:21:13'},
    {airline: 'ual', time: '20:37:12'},
    {airline: 'jbu', time: '18:45:21'},
    {airline: 'ual', time: '16:30:20'},
    {airline: 'dal', time: '10:11:01'},
    {airline: 'ual', time: '09:01:45'},
    {airline: 'aal', time: '06:28:18'},
    {airline: 'swa', time: '09:47:14'},
    {airline: 'swa', time: '15:37:10'},
    {airline: 'ual', time: '12:56:30'},
    {airline: 'nks', time: '05:27:05'},
    {airline: 'ual', time: '18:15:11'},
    {airline: 'swa', time: '06:12:16'},
    {airline: 'dal', time: '16:49:07'},
    {airline: 'aay', time: '18:43:35'},
    {airline: 'aal', time: '18:25:51'},
    {airline: 'aal', time: '18:25:43'},
    {airline: 'aal', time: '15:08:28'},
    {airline: 'aal', time: '05:01:15'},
    {airline: 'ual', time: '14:56:55'},
    {airline: 'fft', time: '12:30:18'},
    {airline: 'scx', time: '11:47:44'},
    {airline: 'aal', time: '14:52:41'},
    {airline: 'vrd'},
    {airline: 'aal', time: '12:35:53'},
    {airline: 'swa', time: '09:21:27'},
    {airline: 'aal', time: '16:20:00'},
    {airline: 'dal', time: '13:29:37'},
    {airline: 'aal', time: '10:55:20'},
    {airline: 'swa', time: '17:27:56'},
    {airline: 'ual', time: '18:50:03'},
    {airline: 'swa', time: '14:41:59'},
    {airline: 'dal', time: '17:30:00'},
    {airline: 'aal', time: '11:03:06'},
    {airline: 'nks', time: '17:13:44'},
    {airline: 'aal', time: '23:53:50'},
    {airline: 'dal', time: '21:23:00'},
    {airline: 'swa', time: '17:48:27'},
    {airline: 'dal', time: '05:42:02'},
    {airline: 'fft', time: '08:44:05'},
    {airline: 'hal', time: '16:37:04'},
    {airline: 'fft', time: '08:32:04'},
    {airline: 'jbu', time: '23:54:04'},
    {airline: 'swa', time: '16:17:41'},
    {airline: 'ual', time: '16:17:12'},
    {airline: 'nks', time: '05:38:04'},
    {airline: 'swa', time: '13:25:01'},
    {airline: 'fft', time: '15:13:55'},
    {airline: 'swa', time: '20:41:13'},
    {airline: 'aal', time: '16:48:48'},
    {airline: 'jbu', time: '13:54:00'},
    {airline: 'hal', time: '12:38:35'},
    {airline: 'ual', time: '10:00:22'},
    {airline: 'ual', time: '13:33:11'},
    {airline: 'aal', time: '14:24:29'},
    {airline: 'aal', time: '12:56:35'},
    {airline: 'swa', time: '04:15:42'},
    {airline: 'dal', time: '10:16:42'},
    {airline: 'dal', time: '15:16:04'},
    {airline: 'fft', time: '18:06:26'},
    {airline: 'ual', time: '12:42:12'},
    {airline: 'dal', time: '10:30:55'},
    {airline: 'jbu', time: '18:48:02'},
    {airline: 'fft', time: '12:04:52'},
    {airline: 'fft', time: '01:05:22'},
    {airline: 'ual', time: '16:07:06'},
    {airline: 'aal', time: '06:40:22'},
    {airline: 'dal', time: '18:04:01'},
    {airline: 'swa', time: '20:16:19'},
    {airline: 'aal', time: '15:01:18'},
    {airline: 'dal', time: '17:38:58'},
    {airline: 'aal', time: '11:34:15'},
    {airline: 'vrd', time: '14:45:32'},
    {airline: 'swa', time: '09:03:04'},
    {airline: 'nks', time: '09:05:48'},
    {airline: 'fft', time: '13:04:18'},
    {airline: 'aal', time: '17:42:14'},
    {airline: 'aal', time: '17:19:33'},
    {airline: 'swa', time: '11:49:47'},
    {airline: 'swa', time: '23:03:59'},
    {airline: 'jbu', time: '16:02:24'},
    {airline: 'aal', time: '10:58:38'},
    {airline: 'swa', time: '15:07:38'},
    {airline: 'fft', time: '13:55:37'},
    {airline: 'ual', time: '11:25:50'},
    {airline: 'dal', time: '17:08:30'},
    {airline: 'swa', time: '14:03:29'},
    {airline: 'jbu', time: '07:20:50'},
    {airline: 'swa', time: '20:33:27'},
    {airline: 'hal', time: '13:05:37'},
    {airline: 'asa', time: '10:21:33'},
    {airline: 'dal', time: '10:53:09'},
    {airline: 'ual', time: '07:11:57'},
    {airline: 'ual', time: '16:04:27'},
    {airline: 'dal', time: '18:34:51'},
    {airline: 'jbu', time: '12:09:48'},
    {airline: 'dal', time: '06:03:46'},
    {airline: 'dal', time: '09:09:57'},
    {airline: 'scx', time: '15:30:21'},
    {airline: 'fft', time: '07:19:04'},
    {airline: 'ual', time: '18:02:32'},
    {airline: 'vrd', time: '16:41:29'},
    {airlin: 'vrd', time: '20:56:53'},
    {airline: 'dal', time: '11:55:56'},
    {airline: 'ual', time: '12:56:54'},
    {airline: 'swa', time: '10:50:00'},
    {airline: 'dal', time: '15:18:06'},
    {airline: 'swa', time: '18:51:23'},
    {airline: 'ual', time: '14:02:56'},
    {airline: 'ual', time: '16:16:12'},
    {airline: 'ual', time: '14:30:52'},
    {airline: 'swa', time: '16:46:27'},
    {airline: 'swa', time: '14:36:38'},
    {airline: 'aal', time: '16:28:05'},
    {airline: 'ual', time: '14:21:55'},
    {airline: 'fft', time: '18:46:48'},
    {airline: 'jbu', time: '01:09:40'},
    {airline: 'jbu', time: '18:51:51'},
    {airline: 'fft', time: '15:53:01'},
    {airline: 'fft', time: '14:37:26'},
    {airline: 'aal', time: '18:04:46'},
    {airline: 'aal', time: '19:48:28'},
    {airline: 'ual', time: '14:28:13'},
    {airline: 'swa', time: '04:47:43'},
    {airline: 'ual', time: '10:38:55'},
    {airline: 'jbu', time: '13:18:08'},
    {airline: 'vrd', time: '08:46:03'},
    {airline: 'ual', time: '13:31:33'},
    {airline: 'vrd', time: '18:51:49'},
    {airline: 'ual', time: '17:54:41'},
    {airline: 'fft', time: '18:12:57'},
    {airline: 'dal', time: '10:47:58'},
    {airline: 'jbu', time: '18:03:46'},
    {airline: 'asa', time: '08:41:19'},
    {airline: 'swa', time: '16:25:12'},
    {airline: 'jbu', time: '13:55:47'},
    {airline: 'nks', time: '18:25:10'},
    {airline: 'dal', time: '14:32:27'},
    {airline: 'dal', time: '18:47:44'},
    {airline: 'aal', time: '12:22:16'},
    {airline: 'swa', time: '15:55:05'},
    {airline: 'jbu', time: '11:52:57'},
    {airline: 'aal', time: '13:56:07'},
    {airline: 'aal', time: '16:56:55'},
    {airline: 'jbu', time: '19:58:01'},
    {airline: 'swa', time: '20:22:38'},
    {airline: 'ual', time: '08:15:31'},
    {airline: 'asa', time: '07:59:05'},
    {airline: 'scx', time: '17:38:16'},
    {airline: 'fft', time: '11:23:20'},
    {airline: 'dal', time: '14:51:56'},
    {airline: 'fft', time: '14:37:08'},
    {airline: 'fft', time: '17:37:50'},
    {airline: 'aal', time: '19:52:54'},
    {airline: 'dal', time: '16:09:52'},
    {airline: 'dal', time: '14:01:01'},
    {airline: 'jbu', time: '08:32:34'},
    {airline: 'scx', time: '10:56:18'},
    {airline: 'scx', time: '17:29:23'},
    {airline: 'aal', time: '16:05:45'},
    {airline: 'ual', time: '13:10:25'},
    {airline: 'swa', time: '15:56:02'},
    {airline: 'jbu', time: '11:47:13'},
    {airline: 'ual', time: '12:06:27'},
    {airline: 'ual', time: '15:39:08'},
    {airline: 'swa', time: '19:53:26'},
    {airline: 'nks', time: '11:29:17'},
    {airline: 'ual', time: '12:47:31'},
    {airline: 'swa', time: '06:26:43'},
    {airline: 'asa', time: '14:03:49'},
    {airline: 'fft', time: '04:39:59'},
    {airline: 'vrd', time: '15:51:59'},
    {airline: 'dal', time: '13:25:39'},
    {airline: 'aal', time: '15:30:00'},
    {airline: 'ual', time: '11:33:35'},
    {airline: 'dal', time: '14:36:45'},
    {airline: 'scx', time: '23:57:30'},
    {airline: 'dal', time: '11:01:38'},
    {airline: 'aal', time: '18:14:23'},
    {airline: 'jbu', time: '13:27:19'},
    {airline: 'aal', time: '15:14:57'},
    {airline: 'fft', time: '19:12:16'},
    {airline: 'ual', time: '05:34:31'},
    {airline: 'dal', time: '14:04:34'},
    {airline: 'fft', time: '11:51:07'},
    {airline: 'swa', time: '21:26:31'},
    {airline: 'ual', time: '15:54:02'},
    {airline: 'aal', time: '18:00:12'},
    {airline: 'swa', time: '13:39:12'},
    {airline: 'dal', time: '20:05:26'},
    {airline: 'ual', time: '15:43:32'},
    {airline: 'dal', time: '15:17:37'},
    {airline: 'swa', time: '17:49:10'},
    {airline: 'aay', time: '09:07:43'},
    {airline: 'dal', time: '20:08:13'},
    {airline: 'dal', time: '13:43:30'},
    {airline: 'aal', time: '15:35:59'},
    {airline: 'ual', time: '12:48:05'},
    {airline: 'dal', time: '10:14:52'},
    {airline: 'fft', time: '07:58:36'},
    {airline: 'jbu', time: '08:59:02'},
    {airline: 'aal', time: '14:18:12'},
    {airline: 'nks', time: '14:19:34'},
    {airline: 'nks', time: '06:43:24'},
    {airline: 'vrd', time: '18:34:56'},
    {airline: 'swa', time: '10:41:01'},
    {airline: 'hal', time: '06:51:44'},
    {airline: 'swa', time: '06:59:16'},
    {airline: 'nks', time: '15:48:27'},
    {airline: 'nks', time: '03:13:25'},
    {airline: 'swa', time: '14:12:51'},
    {airline: 'vrd', time: '11:16:30'},
    {airline: 'aal', time: '09:05:21'},
    {airline: 'ual', time: '13:37:27'},
    {airline: 'jbu', time: '22:16:06'},
    {airline: 'fft', time: '14:48:31'},
    {airline: 'nks', time: '14:36:07'},
    {airline: 'aal', time: '10:04:04'}
  ];


//convert the airlines object into an array
const air = Object.values(airlines);

const heading = document.getElementsByClassName('head')


//now we will map through air array and set the row heading with each airline names
air.map((item,index)=>{
      heading[index].innerHTML=item
})

let jbu=[]
let aal=[];
let nks=[];
let aay=[];
let scx=[];
let fft=[];
let swa=[];
let vrd=[];
let dal=[];
let hal=[];
let ual=[];
let asa=[];


//now loop through the array and push the items accordingly with respect to the airlines 
flights_jan_01_2008.map((item,index)=>{
if(item != null){
  if(item.time!=null){
    //here we will convert the time key's value a number with slicing it only for first two elements 
    item.time=item.time.slice(0,2);
     item.time=parseInt(item.time)+1;
    if(item.airline == 'aal')
    //push the alaska airlines  item into the aal array 
        aal.push(item) 
    else if(item.airline=='hal')
    //push thr aalegiant air item into the aal array 
         hal.push(item)
     else if(item.airline=='aay')
       //push the american airlines into the item into the aay array 
         aay.push(item)
     else if(item.airline=='scx')
       //push the delta into the item into the dal array 
          scx.push(item)
     else if(item.airline=='fft')
       //push the frontier airlines into the item into the fft array 
          fft.push(item)
     else if(item.airline=='nks')
       //push the hawaiian airlines into the item into the hal array 
            nks.push(item)
              //push the spirit airlines into the item into the aal array 
     else if(item.airline=='swa')
       //push the sun country airlines into the item into the aal array 
            swa.push(item)

     else if(item.airline=='vrd')
           vrd.push(item)
             //push the virgin america into the item into the aal array 
     else if(item.airline=='dal')
           dal.push(item)
    else if(item.airline=='ual')
      //push the united airlines into the item into the aal array 
           ual.push(item)

    else if(item.airline=='jbu')
      //push the jetblue airways into the item into the aal array 
           jbu.push(item)
    else if(item.airline=='asa')
           asa.push(item)
  }  
}
})

//check the number of airlines that will fly for differemt hour
var asacount1=0;
var asacount2=0;
var asacount3=0;
var asacount4=0;
var asacount5=0;
var asacount6=0;
var asacount7=0;
var asacount8=0;
var asacount9=0;
var asacount10=0;

var asacount11=0;
var asacount12=0;
var asacount13=0;
var asacount14=0;
var asacount15=0;
var asacount16=0;
var asacount17=0;
var asacount18=0;
var asacount19=0;
var asacount20=0;

var asacount21=0;
var asacount22=0;
var asacount23=0;
var asacount24=0;


//set the total counts for each hour at which flight is scheduled

asa.map((val)=>{
  if(val.time==1){
    asacount1++;
  }
  if(val.time==2){
    asacount2++;
  }
  if(val.time==3){
    asacount2++;
  }
  if(val.time==4){
    asacount4++;
  }
  if(val.time==5){
    asacount5++;
  }
  if(val.time==6){
    asacount6++;
  }
  if(val.time==7){
    asacount7++;
  }
  if(val.time==8){
    asacount8++;
  }

  if(val.time==9){
    asacount9++;
  }
  if(val.time==10){
    asacount10++;
  }

   if(val.time==11){
    asacount11++;
  }
  if(val.time==12){
    asacount12++;
  }

  if(val.time==13){
    asacount13++;
  }
  
  if(val.time==14){
    asacount14++;
  } 

  
  if(val.time==15){
    asacount15++;
  } 
  
  if(val.time==16){
    asacount16++;
  }

  if(val.time==17){
    asacount17++;
  } 
  
  if(val.time==18){
    asacount18++;
  } 
  
  if(val.time==19){
    asacount19++;
  }

  if(val.time==20){
    asacount20++;
  } 
  
  if(val.time==21){
    asacount21++;
  } 

  if(val.time==22){
    asacount22++;
  } 
  
  if(val.time==23){
    asacount23++;
  } 
  
  if(val.time==24){
    asacount24++;
  }
})

var asadiv = document.getElementsByClassName('colorasa');

//initialize an empty array 
let asacount=[];

//push the values at which flight is scheduled for different hours
asacount.push(asacount1);
asacount.push(asacount2);
asacount.push(asacount3);
asacount.push(asacount4);
asacount.push(asacount5);
asacount.push(asacount6);
asacount.push(asacount7);
asacount.push(asacount8);
asacount.push(asacount9);
asacount.push(asacount10);
asacount.push(asacount11);
asacount.push(asacount12);
asacount.push(asacount13);
asacount.push(asacount14);
asacount.push(asacount15);
asacount.push(asacount16);
asacount.push(asacount17);
asacount.push(asacount18);
asacount.push(asacount19);
asacount.push(asacount20);
asacount.push(asacount21);
asacount.push(asacount22);
asacount.push(asacount23);
asacount.push(asacount24);


//map over the array and set the values of the html with total flights for that time
asacount.map((item,index)=>{
  if(item==0){
   asadiv[index].innerHTML = '-';
  }
  else
  asadiv[index].innerHTML = item;
})


//now we will initialize the count of the allegiant air flight for different hours with respected to the timing of the flight
var aaycount1=0;
var aaycount2=0;
var aaycount3=0;
var aaycount4=0;
var aaycount5=0;
var aaycount6=0;
var aaycount7=0;
var aaycount8=0;
var aaycount9=0;
var aaycount10=0;

var aaycount11=0;
var aaycount12=0;
var aaycount13=0;
var aaycount14=0;
var aaycount15=0;
var aaycount16=0;
var aaycount17=0;
var aaycount18=0;
var aaycount19=0;
var aaycount20=0;

var aaycount21=0;
var aaycount22=0;
var aaycount23=0;
var aaycount24=0;


//map through the allegiant air array and set the counts for different hours for the flight 
aay.map((val)=>{
  if(val.time==1){
    aaycount1++;
  }
  if(val.time==2){
    aaycount2++;
  }
  if(val.time==3){
    aaycount2++;
  }
  if(val.time==4){
    aaycount4++;
  }
  if(val.time==5){
    aaycount5++;
  }
  if(val.time==6){
    aaycount6++;
  }
  if(val.time==7){
    aaycount7++;
  }
  if(val.time==8){
    aaycount8++;
  }

  if(val.time==9){
    aaycount9++;
  }
  if(val.time==10){
    aaycount10++;
  }

   if(val.time==11){
    aaycount11++;
  }
  if(val.time==12){
    aaycount12++;
  }

  if(val.time==13){
    aaycount13++;
  }
  
  if(val.time==14){
    aaycount14++;
  } 

  
  if(val.time==15){
    aaycount15++;
  } 
  
  if(val.time==16){
    aaycount16++;
  }

  if(val.time==17){
    aaycount17++;
  } 
  
  if(val.time==18){
    aaycount18++;
  } 
  
  if(val.time==19){
    aaycount19++;
  }

  if(val.time==20){
    aaycount20++;
  } 
  
  if(val.time==21){
    aaycount21++;
  } 

  if(val.time==22){
    aaycount22++;
  } 
  
  if(val.time==23){
    aaycount23++;
  } 
  
  if(val.time==24){
    aaycount24++;
  }
})

var aaydiv = document.getElementsByClassName('coloraay');

let aaycount=[];

//push the counts of the flights for different hours with respective to the flight
aaycount.push(aaycount1);
aaycount.push(aaycount2);
aaycount.push(aaycount3);
aaycount.push(aaycount4);
aaycount.push(aaycount5);
aaycount.push(aaycount6);
aaycount.push(aaycount7);
aaycount.push(aaycount8);
aaycount.push(aaycount9);
aaycount.push(aaycount10);
aaycount.push(aaycount11);
aaycount.push(aaycount12);
aaycount.push(aaycount13);
aaycount.push(aaycount14);
aaycount.push(aaycount15);
aaycount.push(aaycount16);
aaycount.push(aaycount17);
aaycount.push(aaycount18);
aaycount.push(aaycount19);
aaycount.push(aaycount20);
aaycount.push(aaycount21);
aaycount.push(aaycount22);
aaycount.push(aaycount23);
aaycount.push(aaycount24);


//map through the american airlines and set the innerHtml for the american airlines
aaycount.map((item,index)=>{
  if(item==0){
   aaydiv[index].innerHTML = '-';
  }
  else
  aaydiv[index].innerHTML = item;
})


//set the count of the flights for different timings 
var aalcount1=0;
var aalcount2=0;
var aalcount3=0;
var aalcount4=0;
var aalcount5=0;
var aalcount6=0;
var aalcount7=0;
var aalcount8=0;
var aalcount9=0;
var aalcount10=0;

var aalcount11=0;
var aalcount12=0;
var aalcount13=0;
var aalcount14=0;
var aalcount15=0;
var aalcount16=0;
var aalcount17=0;
var aalcount18=0;
var aalcount19=0;
var aalcount20=0;

var aalcount21=0;
var aalcount22=0;
var aalcount23=0;
var aalcount24=0;

//map throught the array and count the number of american airline flight for differnt time

aal.map((val)=>{
  if(val.time==1){
    aalcount1++;
  }
  if(val.time==2){
    aalcount2++;
  }
  if(val.time==3){
    aalcount2++;
  }
  if(val.time==4){
    aalcount4++;
  }
  if(val.time==5){
    aalcount5++;
  }
  if(val.time==6){
    aalcount6++;
  }
  if(val.time==7){
    aalcount7++;
  }
  if(val.time==8){
    aalcount8++;
  }

  if(val.time==9){
    aalcount9++;
  }
  if(val.time==10){
    aalcount10++;
  }

   if(val.time==11){
    aalcount11++;
  }
  if(val.time==12){
    aalcount12++;
  }

  if(val.time==13){
    aalcount13++;
  }
  
  if(val.time==14){
    aalcount14++;
  } 

  
  if(val.time==15){
    aalcount15++;
  } 
  
  if(val.time==16){
    aalcount16++;
  }

  if(val.time==17){
    aalcount17++;
  } 
  
  if(val.time==18){
    aalcount18++;
  } 
  
  if(val.time==19){
    aalcount19++;
  }

  if(val.time==20){
    aalcount20++;
  } 
  
  if(val.time==21){
    aalcount21++;
  } 

  if(val.time==22){
    aalcount22++;
  } 
  
  if(val.time==23){
    aalcount23++;
  } 
  
  if(val.time==24){
    aalcount24++;
  }
})

var aaldiv = document.getElementsByClassName('coloraal');


let aalcount=[];
//push the timings of the flight for the different hours 
aalcount.push(aalcount1);
aalcount.push(aalcount2);
aalcount.push(aalcount3);
aalcount.push(aalcount4);
aalcount.push(aalcount5);
aalcount.push(aalcount6);
aalcount.push(aalcount7);
aalcount.push(aalcount8);
aalcount.push(aalcount9);
aalcount.push(aalcount10);
aalcount.push(aalcount11);
aalcount.push(aalcount12);
aalcount.push(aalcount13);
aalcount.push(aalcount14);
aalcount.push(aalcount15);
aalcount.push(aalcount16);
aalcount.push(aalcount17);
aalcount.push(aalcount18);
aalcount.push(aalcount19);
aalcount.push(aalcount20);
aalcount.push(aalcount21);
aalcount.push(aalcount22);
aalcount.push(aalcount23);
aalcount.push(aalcount24);


//map through the array and set the innerhtml with the number of flights for different hours
aalcount.map((item,index)=>{
  if(item==0){
    aaldiv[index].innerHTML = '-';
  }
  else
   aaldiv[index].innerHTML = item;
})


var dalcount1=0;
var dalcount2=0;
var dalcount3=0;
var dalcount4=0;
var dalcount5=0;
var dalcount6=0;
var dalcount7=0;
var dalcount8=0;
var dalcount9=0;
var dalcount10=0;

var dalcount11=0;
var dalcount12=0;
var dalcount13=0;
var dalcount14=0;
var dalcount15=0;
var dalcount16=0;
var dalcount17=0;
var dalcount18=0;
var dalcount19=0;
var dalcount20=0;

var dalcount21=0;
var dalcount22=0;
var dalcount23=0;
var dalcount24=0;


dal.map((val)=>{
  if(val.time==1){
    dalcount1++;
  }
  if(val.time==2){
    dalcount2++;
  }
  if(val.time==3){
    dalcount2++;
  }
  if(val.time==4){
    dalcount4++;
  }
  if(val.time==5){
    dalcount5++;
  }
  if(val.time==6){
    dalcount6++;
  }
  if(val.time==7){
    dalcount7++;
  }
  if(val.time==8){
    dalcount8++;
  }

  if(val.time==9){
    dalcount9++;
  }
  if(val.time==10){
    dalcount10++;
  }

   if(val.time==11){
    dalcount11++;
  }
  if(val.time==12){
    dalcount12++;
  }

  if(val.time==13){
    dalcount13++;
  }
  
  if(val.time==14){
    dalcount14++;
  } 

  
  if(val.time==15){
    dalcount15++;
  } 
  
  if(val.time==16){
    dalcount16++;
  }

  if(val.time==17){
    dalcount17++;
  } 
  
  if(val.time==18){
    dalcount18++;
  } 
  
  if(val.time==19){
    dalcount19++;
  }

  if(val.time==20){
    dalcount20++;
  } 
  
  if(val.time==21){
    dalcount21++;
  } 

  if(val.time==22){
    dalcount22++;
  } 
  
  if(val.time==23){
    dalcount23++;
  } 
  
  if(val.time==24){
    dalcount24++;
  }
})

var daldiv = document.getElementsByClassName('colordal');

let dalcount=[];

dalcount.push(dalcount1);
dalcount.push(dalcount2);
dalcount.push(dalcount3);
dalcount.push(dalcount4);
dalcount.push(dalcount5);
dalcount.push(dalcount6);
dalcount.push(dalcount7);
dalcount.push(dalcount8);
dalcount.push(dalcount9);
dalcount.push(dalcount10);
dalcount.push(dalcount11);
dalcount.push(dalcount12);
dalcount.push(dalcount13);
dalcount.push(dalcount14);
dalcount.push(dalcount15);
dalcount.push(dalcount16);
dalcount.push(dalcount17);
dalcount.push(dalcount18);
dalcount.push(dalcount19);
dalcount.push(dalcount20);
dalcount.push(dalcount21);
dalcount.push(dalcount22);
dalcount.push(dalcount23);
dalcount.push(dalcount24);

dalcount.map((item,index)=>{
  if(item==0){
    daldiv[index].innerHTML = '-';
  }
  else
   daldiv[index].innerHTML = item;
})


var fftcount1=0;
var fftcount2=0;
var fftcount3=0;
var fftcount4=0;
var fftcount5=0;
var fftcount6=0;
var fftcount7=0;
var fftcount8=0;
var fftcount9=0;
var fftcount10=0;

var fftcount11=0;
var fftcount12=0;
var fftcount13=0;
var fftcount14=0;
var fftcount15=0;
var fftcount16=0;
var fftcount17=0;
var fftcount18=0;
var fftcount19=0;
var fftcount20=0;

var fftcount21=0;
var fftcount22=0;
var fftcount23=0;
var fftcount24=0;


fft.map((val)=>{
  if(val.time==1){
    fftcount1++;
  }
  if(val.time==2){
    fftcount2++;
  }
  if(val.time==3){
    fftcount2++;
  }
  if(val.time==4){
    fftcount4++;
  }
  if(val.time==5){
    fftcount5++;
  }
  if(val.time==6){
    fftcount6++;
  }
  if(val.time==7){
    fftcount7++;
  }
  if(val.time==8){
    fftcount8++;
  }

  if(val.time==9){
    fftcount9++;
  }
  if(val.time==10){
    fftcount10++;
  }

   if(val.time==11){
    fftcount11++;
  }
  if(val.time==12){
    fftcount12++;
  }

  if(val.time==13){
    fftcount13++;
  }
  
  if(val.time==14){
    fftcount14++;
  } 

  
  if(val.time==15){
    fftcount15++;
  } 
  
  if(val.time==16){
    fftcount16++;
  }

  if(val.time==17){
    fftcount17++;
  } 
  
  if(val.time==18){
    fftcount18++;
  } 
  
  if(val.time==19){
    fftcount19++;
  }

  if(val.time==20){
    fftcount20++;
  } 
  
  if(val.time==21){
    fftcount21++;
  } 

  if(val.time==22){
    fftcount22++;
  } 
  
  if(val.time==23){
    fftcount23++;
  } 
  
  if(val.time==24){
    fftcount24++;
  }
})

var fftdiv = document.getElementsByClassName('colorfft');

let fftcount=[]

fftcount.push(fftcount1);
fftcount.push(fftcount2);
fftcount.push(fftcount3);
fftcount.push(fftcount4);
fftcount.push(fftcount5);
fftcount.push(fftcount6);
fftcount.push(fftcount7);
fftcount.push(fftcount8);
fftcount.push(fftcount9);
fftcount.push(fftcount10);
fftcount.push(fftcount11);
fftcount.push(fftcount12);
fftcount.push(fftcount13);
fftcount.push(fftcount14);
fftcount.push(fftcount15);
fftcount.push(fftcount16);
fftcount.push(fftcount17);
fftcount.push(fftcount18);
fftcount.push(fftcount19);
fftcount.push(fftcount20);
fftcount.push(fftcount21);
fftcount.push(fftcount22);
fftcount.push(fftcount23);
fftcount.push(fftcount24);

fftcount.map((item,index)=>{
  if(item==0){
    fftdiv[index].innerHTML = '-';
  }
  else
   fftdiv[index].innerHTML = item;
})


var halcount1=0;
var halcount2=0;
var halcount3=0;
var halcount4=0;
var halcount5=0;
var halcount6=0;
var halcount7=0;
var halcount8=0;
var halcount9=0;
var halcount10=0;

var halcount11=0;
var halcount12=0;
var halcount13=0;
var halcount14=0;
var halcount15=0;
var halcount16=0;
var halcount17=0;
var halcount18=0;
var halcount19=0;
var halcount20=0;

var halcount21=0;
var halcount22=0;
var halcount23=0;
var halcount24=0;


hal.map((val)=>{
  if(val.time==1){
    halcount1++;
  }
  if(val.time==2){
    halcount2++;
  }
  if(val.time==3){
    halcount2++;
  }
  if(val.time==4){
    halcount4++;
  }
  if(val.time==5){
    halcount5++;
  }
  if(val.time==6){
    halcount6++;
  }
  if(val.time==7){
    halcount7++;
  }
  if(val.time==8){
    halcount8++;
  }

  if(val.time==9){
    halcount9++;
  }
  if(val.time==10){
    halcount10++;
  }

   if(val.time==11){
    halcount11++;
  }
  if(val.time==12){
    halcount12++;
  }

  if(val.time==13){
    halcount13++;
  }
  
  if(val.time==14){
    halcount14++;
  } 

  
  if(val.time==15){
    halcount15++;
  } 
  
  if(val.time==16){
    halcount16++;
  }

  if(val.time==17){
    halcount17++;
  } 
  
  if(val.time==18){
    halcount18++;
  } 
  
  if(val.time==19){
    halcount19++;
  }

  if(val.time==20){
    halcount20++;
  } 
  
  if(val.time==21){
    halcount21++;
  } 

  if(val.time==22){
    halcount22++;
  } 
  
  if(val.time==23){
    halcount23++;
  } 
  
  if(val.time==24){
    halcount24++;
  }
})

var haldiv = document.getElementsByClassName('colorhal');

let halcount=[]

halcount.push(halcount1);
halcount.push(halcount2);
halcount.push(halcount3);
halcount.push(halcount4);
halcount.push(halcount5);
halcount.push(halcount6);
halcount.push(halcount7);
halcount.push(halcount8);
halcount.push(halcount9);
halcount.push(halcount10);
halcount.push(halcount11);
halcount.push(halcount12);
halcount.push(halcount13);
halcount.push(halcount14);
halcount.push(halcount15);
halcount.push(halcount16);
halcount.push(halcount17);
halcount.push(halcount18);
halcount.push(halcount19);
halcount.push(halcount20);
halcount.push(halcount21);
halcount.push(halcount22);
halcount.push(halcount23);
halcount.push(halcount24);

halcount.map((item,index)=>{
  if(item==0){
    haldiv[index].innerHTML = '-';
  }
  else
   haldiv[index].innerHTML = item;
})




var jbucount1=0;
var jbucount2=0;
var jbucount3=0;
var jbucount4=0;
var jbucount5=0;
var jbucount6=0;
var jbucount7=0;
var jbucount8=0;
var jbucount9=0;
var jbucount10=0;

var jbucount11=0;
var jbucount12=0;
var jbucount13=0;
var jbucount14=0;
var jbucount15=0;
var jbucount16=0;
var jbucount17=0;
var jbucount18=0;
var jbucount19=0;
var jbucount20=0;

var jbucount21=0;
var jbucount22=0;
var jbucount23=0;
var jbucount24=0;


jbu.map((val)=>{
  if(val.time==1){
    jbucount1++;
  }
  if(val.time==2){
    jbucount2++;
  }
  if(val.time==3){
    jbucount2++;
  }
  if(val.time==4){
    jbucount4++;
  }
  if(val.time==5){
    jbucount5++;
  }
  if(val.time==6){
    jbucount6++;
  }
  if(val.time==7){
    jbucount7++;
  }
  if(val.time==8){
    jbucount8++;
  }

  if(val.time==9){
    jbucount9++;
  }
  if(val.time==10){
    jbucount10++;
  }

   if(val.time==11){
    jbucount11++;
  }
  if(val.time==12){
    jbucount12++;
  }

  if(val.time==13){
    jbucount13++;
  }
  
  if(val.time==14){
    jbucount14++;
  } 

  
  if(val.time==15){
    jbucount15++;
  } 
  
  if(val.time==16){
    jbucount16++;
  }

  if(val.time==17){
    jbucount17++;
  } 
  
  if(val.time==18){
    jbucount18++;
  } 
  
  if(val.time==19){
    jbucount19++;
  }

  if(val.time==20){
    jbucount20++;
  } 
  
  if(val.time==21){
    jbucount21++;
  } 

  if(val.time==22){
    jbucount22++;
  } 
  
  if(val.time==23){
    jbucount23++;
  } 
  
  if(val.time==24){
    jbucount24++;
  }
})

var jbudiv = document.getElementsByClassName('colorjbu');

let jbucount=[]

jbucount.push(jbucount1);
jbucount.push(jbucount2);
jbucount.push(jbucount3);
jbucount.push(jbucount4);
jbucount.push(jbucount5);
jbucount.push(jbucount6);
jbucount.push(jbucount7);
jbucount.push(jbucount8);
jbucount.push(jbucount9);
jbucount.push(jbucount10);
jbucount.push(jbucount11);
jbucount.push(jbucount12);
jbucount.push(jbucount13);
jbucount.push(jbucount14);
jbucount.push(jbucount15);
jbucount.push(jbucount16);
jbucount.push(jbucount17);
jbucount.push(jbucount18);
jbucount.push(jbucount19);
jbucount.push(jbucount20);
jbucount.push(jbucount21);
jbucount.push(jbucount22);
jbucount.push(jbucount23);
jbucount.push(jbucount24);

jbucount.map((item,index)=>{
  if(item==0){
    jbudiv[index].innerHTML = '-';
  }
  else
   jbudiv[index].innerHTML = item;
})



var swacount1=0;
var swacount2=0;
var swacount3=0;
var swacount4=0;
var swacount5=0;
var swacount6=0;
var swacount7=0;
var swacount8=0;
var swacount9=0;
var swacount10=0;

var swacount11=0;
var swacount12=0;
var swacount13=0;
var swacount14=0;
var swacount15=0;
var swacount16=0;
var swacount17=0;
var swacount18=0;
var swacount19=0;
var swacount20=0;

var swacount21=0;
var swacount22=0;
var swacount23=0;
var swacount24=0;


swa.map((val)=>{
  if(val.time==1){
    swacount1++;
  }
  if(val.time==2){
    swacount2++;
  }
  if(val.time==3){
    swacount2++;
  }
  if(val.time==4){
    swacount4++;
  }
  if(val.time==5){
    swacount5++;
  }
  if(val.time==6){
    swacount6++;
  }
  if(val.time==7){
    swacount7++;
  }
  if(val.time==8){
    swacount8++;
  }

  if(val.time==9){
    swacount9++;
  }
  if(val.time==10){
    swacount10++;
  }

   if(val.time==11){
    swacount11++;
  }
  if(val.time==12){
    swacount12++;
  }

  if(val.time==13){
    swacount13++;
  }
  
  if(val.time==14){
    swacount14++;
  } 

  
  if(val.time==15){
    swacount15++;
  } 
  
  if(val.time==16){
    swacount16++;
  }

  if(val.time==17){
    swacount17++;
  } 
  
  if(val.time==18){
    swacount18++;
  } 
  
  if(val.time==19){
    swacount19++;
  }

  if(val.time==20){
    swacount20++;
  } 
  
  if(val.time==21){
    swacount21++;
  } 

  if(val.time==22){
    swacount22++;
  } 
  
  if(val.time==23){
    swacount23++;
  } 
  
  if(val.time==24){
    swacount24++;
  }
})

var swadiv = document.getElementsByClassName('colorswa');

let swacount=[]

swacount.push(swacount1);
swacount.push(swacount2);
swacount.push(swacount3);
swacount.push(swacount4);
swacount.push(swacount5);
swacount.push(swacount6);
swacount.push(swacount7);
swacount.push(swacount8);
swacount.push(swacount9);
swacount.push(swacount10);
swacount.push(swacount11);
swacount.push(swacount12);
swacount.push(swacount13);
swacount.push(swacount14);
swacount.push(swacount15);
swacount.push(swacount16);
swacount.push(swacount17);
swacount.push(swacount18);
swacount.push(swacount19);
swacount.push(swacount20);
swacount.push(swacount21);
swacount.push(swacount22);
swacount.push(swacount23);
swacount.push(swacount24);

swacount.map((item,index)=>{
  if(item==0){
    swadiv[index].innerHTML = '-';
  }
  else
   swadiv[index].innerHTML = item;
})



var nkscount1=0;
var nkscount2=0;
var nkscount3=0;
var nkscount4=0;
var nkscount5=0;
var nkscount6=0;
var nkscount7=0;
var nkscount8=0;
var nkscount9=0;
var nkscount10=0;

var nkscount11=0;
var nkscount12=0;
var nkscount13=0;
var nkscount14=0;
var nkscount15=0;
var nkscount16=0;
var nkscount17=0;
var nkscount18=0;
var nkscount19=0;
var nkscount20=0;

var nkscount21=0;
var nkscount22=0;
var nkscount23=0;
var nkscount24=0;


nks.map((val)=>{
  if(val.time==1){
    nkscount1++;
  }
  if(val.time==2){
    nkscount2++;
  }
  if(val.time==3){
    nkscount2++;
  }
  if(val.time==4){
    nkscount4++;
  }
  if(val.time==5){
    nkscount5++;
  }
  if(val.time==6){
    nkscount6++;
  }
  if(val.time==7){
    nkscount7++;
  }
  if(val.time==8){
    nkscount8++;
  }

  if(val.time==9){
    nkscount9++;
  }
  if(val.time==10){
    nkscount10++;
  }

   if(val.time==11){
    nkscount11++;
  }
  if(val.time==12){
    nkscount12++;
  }

  if(val.time==13){
    nkscount13++;
  }











  
  if(val.time==14){
    nkscount14++;
  } 

  
  if(val.time==15){
    nkscount15++;
  } 
  
  if(val.time==16){
    nkscount16++;
  }

  if(val.time==17){
    nkscount17++;
  } 
  
  if(val.time==18){
    nkscount18++;
  } 
  
  if(val.time==19){
    nkscount19++;
  }

  if(val.time==20){
    nkscount20++;
  } 
  
  if(val.time==21){
    nkscount21++;
  } 

  if(val.time==22){
    nkscount22++;
  } 
  
  if(val.time==23){
    nkscount23++;
  } 
  
  if(val.time==24){
    nkscount24++;
  }
})

var nksdiv = document.getElementsByClassName('colornks');

let nkscount=[]

nkscount.push(nkscount1);
nkscount.push(nkscount2);
nkscount.push(nkscount3);
nkscount.push(nkscount4);
nkscount.push(nkscount5);
nkscount.push(nkscount6);
nkscount.push(nkscount7);
nkscount.push(nkscount8);
nkscount.push(nkscount9);
nkscount.push(nkscount10);
nkscount.push(nkscount11);
nkscount.push(nkscount12);
nkscount.push(nkscount13);
nkscount.push(nkscount14);
nkscount.push(nkscount15);
nkscount.push(nkscount16);
nkscount.push(nkscount17);
nkscount.push(nkscount18);
nkscount.push(nkscount19);
nkscount.push(nkscount20);
nkscount.push(nkscount21);
nkscount.push(nkscount22);
nkscount.push(nkscount23);
nkscount.push(nkscount24);

nkscount.map((item,index)=>{
  if(item==0){
    nksdiv[index].innerHTML = '-';
  }
  else
   nksdiv[index].innerHTML = item;
})



var scxcount1=0;
var scxcount2=0;
var scxcount3=0;
var scxcount4=0;
var scxcount5=0;
var scxcount6=0;
var scxcount7=0;
var scxcount8=0;
var scxcount9=0;
var scxcount10=0;

var scxcount11=0;
var scxcount12=0;
var scxcount13=0;
var scxcount14=0;
var scxcount15=0;
var scxcount16=0;
var scxcount17=0;
var scxcount18=0;
var scxcount19=0;
var scxcount20=0;

var scxcount21=0;
var scxcount22=0;
var scxcount23=0;
var scxcount24=0;


scx.map((val)=>{
  if(val.time==1){
    scxcount1++;
  }
  if(val.time==2){
    scxcount2++;
  }
  if(val.time==3){
    scxcount2++;
  }
  if(val.time==4){
    scxcount4++;
  }
  if(val.time==5){
    scxcount5++;
  }
  if(val.time==6){
    scxcount6++;
  }
  if(val.time==7){
    scxcount7++;
  }
  if(val.time==8){
    scxcount8++;
  }

  if(val.time==9){
    scxcount9++;
  }
  if(val.time==10){
    scxcount10++;
  }

   if(val.time==11){
    scxcount11++;
  }
  if(val.time==12){
    scxcount12++;
  }

  if(val.time==13){
    scxcount13++;
  }










  
  
  if(val.time==14){
    scxcount14++;
  } 

  
  if(val.time==15){
    scxcount15++;
  } 
  
  if(val.time==16){
    scxcount16++;
  }

  if(val.time==17){
    scxcount17++;
  } 
  
  if(val.time==18){
    scxcount18++;
  } 
  
  if(val.time==19){
    scxcount19++;
  }

  if(val.time==20){
    scxcount20++;
  } 
  
  if(val.time==21){
    scxcount21++;
  } 

  if(val.time==22){
    scxcount22++;
  } 
  
  if(val.time==23){
    scxcount23++;
  } 
  
  if(val.time==24){
    scxcount24++;
  }
})

var scxdiv = document.getElementsByClassName('colorscx');

let scxcount=[]

scxcount.push(scxcount1);
scxcount.push(scxcount2);
scxcount.push(scxcount3);
scxcount.push(scxcount4);
scxcount.push(scxcount5);
scxcount.push(scxcount6);
scxcount.push(scxcount7);
scxcount.push(scxcount8);
scxcount.push(scxcount9);
scxcount.push(scxcount10);
scxcount.push(scxcount11);
scxcount.push(scxcount12);
scxcount.push(scxcount13);
scxcount.push(scxcount14);
scxcount.push(scxcount15);
scxcount.push(scxcount16);
scxcount.push(scxcount17);
scxcount.push(scxcount18);
scxcount.push(scxcount19);
scxcount.push(scxcount20);
scxcount.push(scxcount21);
scxcount.push(scxcount22);
scxcount.push(scxcount23);
scxcount.push(scxcount24);

scxcount.map((item,index)=>{
  if(item==0){
    scxdiv[index].innerHTML = '-';
  }
  else
   scxdiv[index].innerHTML = item;
})





var ualcount1=0;
var ualcount2=0;
var ualcount3=0;
var ualcount4=0;
var ualcount5=0;
var ualcount6=0;
var ualcount7=0;
var ualcount8=0;
var ualcount9=0;
var ualcount10=0;

var ualcount11=0;
var ualcount12=0;
var ualcount13=0;
var ualcount14=0;
var ualcount15=0;
var ualcount16=0;
var ualcount17=0;
var ualcount18=0;
var ualcount19=0;
var ualcount20=0;

var ualcount21=0;
var ualcount22=0;
var ualcount23=0;
var ualcount24=0;


ual.map((val)=>{
  if(val.time==1){
    ualcount1++;
  }
  if(val.time==2){
    ualcount2++;
  }
  if(val.time==3){
    ualcount2++;
  }
  if(val.time==4){
    ualcount4++;
  }
  if(val.time==5){
    ualcount5++;
  }
  if(val.time==6){
    ualcount6++;
  }
  if(val.time==7){
    ualcount7++;
  }
  if(val.time==8){
    ualcount8++;
  }

  if(val.time==9){
    ualcount9++;
  }
  if(val.time==10){
    ualcount10++;
  }

   if(val.time==11){
    ualcount11++;
  }
  if(val.time==12){
    ualcount12++;
  }

  if(val.time==13){
    ualcount13++;
  }










  
  
  if(val.time==14){
    ualcount14++;
  } 

  
  if(val.time==15){
    ualcount15++;
  } 
  
  if(val.time==16){
    ualcount16++;
  }

  if(val.time==17){
    ualcount17++;
  } 
  
  if(val.time==18){
    ualcount18++;
  } 
  
  if(val.time==19){
    ualcount19++;
  }

  if(val.time==20){
    ualcount20++;
  } 
  
  if(val.time==21){
    ualcount21++;
  } 

  if(val.time==22){
    ualcount22++;
  } 
  
  if(val.time==23){
    ualcount23++;
  } 
  
  if(val.time==24){
    ualcount24++;
  }
})

var ualdiv = document.getElementsByClassName('colorual');

let ualcount=[]

ualcount.push(ualcount1);
ualcount.push(ualcount2);
ualcount.push(ualcount3);
ualcount.push(ualcount4);
ualcount.push(ualcount5);
ualcount.push(ualcount6);
ualcount.push(ualcount7);
ualcount.push(ualcount8);
ualcount.push(ualcount9);
ualcount.push(ualcount10);
ualcount.push(ualcount11);
ualcount.push(ualcount12);
ualcount.push(ualcount13);
ualcount.push(ualcount14);
ualcount.push(ualcount15);
ualcount.push(ualcount16);
ualcount.push(ualcount17);
ualcount.push(ualcount18);
ualcount.push(ualcount19);
ualcount.push(ualcount20);
ualcount.push(ualcount21);
ualcount.push(ualcount22);
ualcount.push(ualcount23);
ualcount.push(ualcount24);

ualcount.map((item,index)=>{
  if(item==0){
    ualdiv[index].innerHTML = '-';
  }
  else
   ualdiv[index].innerHTML = item;
})





var vrdcount1=0;
var vrdcount2=0;
var vrdcount3=0;
var vrdcount4=0;
var vrdcount5=0;
var vrdcount6=0;
var vrdcount7=0;
var vrdcount8=0;
var vrdcount9=0;
var vrdcount10=0;

var vrdcount11=0;
var vrdcount12=0;
var vrdcount13=0;
var vrdcount14=0;
var vrdcount15=0;
var vrdcount16=0;
var vrdcount17=0;
var vrdcount18=0;
var vrdcount19=0;
var vrdcount20=0;

var vrdcount21=0;
var vrdcount22=0;
var vrdcount23=0;
var vrdcount24=0;


vrd.map((val)=>{
  if(val.time==1){
    vrdcount1++;
  }
  if(val.time==2){
    vrdcount2++;
  }
  if(val.time==3){
    vrdcount2++;
  }
  if(val.time==4){
    vrdcount4++;
  }
  if(val.time==5){
    vrdcount5++;
  }
  if(val.time==6){
    vrdcount6++;
  }
  if(val.time==7){
    vrdcount7++;
  }
  if(val.time==8){
    vrdcount8++;
  }

  if(val.time==9){
    vrdcount9++;
  }
  if(val.time==10){
    vrdcount10++;
  }

   if(val.time==11){
    vrdcount11++;
  }
  if(val.time==12){
    vrdcount12++;
  }

  if(val.time==13){
    vrdcount13++;
  }










  
  
  if(val.time==14){
    vrdcount14++;
  } 

  
  if(val.time==15){
    vrdcount15++;
  } 
  
  if(val.time==16){
    vrdcount16++;
  }

  if(val.time==17){
    vrdcount17++;
  } 
  
  if(val.time==18){
    vrdcount18++;
  } 
  
  if(val.time==19){
    vrdcount19++;
  }

  if(val.time==20){
    vrdcount20++;
  } 
  
  if(val.time==21){
    vrdcount21++;
  } 

  if(val.time==22){
    vrdcount22++;
  } 
  
  if(val.time==23){
    vrdcount23++;
  } 
  
  if(val.time==24){
    vrdcount24++;
  }
})

var vrddiv = document.getElementsByClassName('colorvrd');

let vrdcount=[]

vrdcount.push(vrdcount1);
vrdcount.push(vrdcount2);
vrdcount.push(vrdcount3);
vrdcount.push(vrdcount4);
vrdcount.push(vrdcount5);
vrdcount.push(vrdcount6);
vrdcount.push(vrdcount7);
vrdcount.push(vrdcount8);
vrdcount.push(vrdcount9);
vrdcount.push(vrdcount10);
vrdcount.push(vrdcount11);
vrdcount.push(vrdcount12);
vrdcount.push(vrdcount13);
vrdcount.push(vrdcount14);
vrdcount.push(vrdcount15);
vrdcount.push(vrdcount16);
vrdcount.push(vrdcount17);
vrdcount.push(vrdcount18);
vrdcount.push(vrdcount19);
vrdcount.push(vrdcount20);
vrdcount.push(vrdcount21);
vrdcount.push(vrdcount22);
vrdcount.push(vrdcount23);
vrdcount.push(vrdcount24);

vrdcount.map((item,index)=>{
  if(item==0)
  vrddiv[index].innerHTML = '-';
  //console.log(item)
  else
    vrddiv[index].innerHTML = item;
})













